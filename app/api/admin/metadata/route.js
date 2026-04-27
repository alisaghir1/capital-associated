import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '../../../../lib/supabase-admin';

export const dynamic = 'force-dynamic';

/**
 * GET - Fetch all site metadata
 * Uses supabaseAdmin to bypass RLS
 */
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('site_metadata')
      .select('*');

    if (error) {
      console.error('Error fetching metadata:', error);
      return NextResponse.json(
        { error: 'Failed to fetch metadata: ' + error.message },
        { status: 500 }
      );
    }

    // Convert array of key-value pairs to object
    const metadataObj = {};
    (data || []).forEach(item => {
      metadataObj[item.key] = item.value;
    });

    return NextResponse.json({ data: metadataObj });
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}

/**
 * PUT - Update site metadata (batch upsert)
 * Expects JSON body: { metadata: { key: value, ... } }
 * Uses supabaseAdmin to bypass RLS
 */
export async function PUT(request) {
  try {
    const { metadata } = await request.json();

    if (!metadata || typeof metadata !== 'object') {
      return NextResponse.json(
        { error: 'Invalid metadata format' },
        { status: 400 }
      );
    }

    // Convert object to array of records for upsert
    const records = Object.entries(metadata).map(([key, value]) => ({
      key,
      value: value ?? null,
      updated_at: new Date().toISOString(),
    }));

    // Upsert all records in one query (insert or update on conflict).
    // Add .select() so PostgREST returns the affected rows; this lets us
    // detect silent failures (e.g. RLS denial when running without the
    // service role key) instead of falsely reporting success.
    const { data: upserted, error } = await supabaseAdmin
      .from('site_metadata')
      .upsert(records, { onConflict: 'key' })
      .select();

    if (error) {
      console.error('Error updating metadata:', error);
      return NextResponse.json(
        { error: 'Failed to update metadata: ' + error.message },
        { status: 500 }
      );
    }

    if (!upserted || upserted.length !== records.length) {
      console.error(
        'Metadata upsert wrote unexpected row count:',
        { expected: records.length, received: upserted?.length ?? 0 }
      );
      return NextResponse.json(
        {
          error:
            'Metadata save did not persist. This usually means SUPABASE_SERVICE_ROLE_KEY is missing or RLS is blocking writes on site_metadata.',
        },
        { status: 500 }
      );
    }

    // Convert back to object shape for the client
    const updatedObj = {};
    upserted.forEach(item => {
      updatedObj[item.key] = item.value;
    });

    // Invalidate every cached public page so updated site settings
    // (logo, contact info, footer, etc.) appear immediately on Vercel.
    try {
      revalidatePath('/', 'layout');
    } catch (e) {
      console.warn('revalidatePath failed (non-fatal):', e?.message);
    }

    return NextResponse.json({ success: true, data: updatedObj });
  } catch (error) {
    console.error('Metadata update error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}
