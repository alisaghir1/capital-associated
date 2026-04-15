import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase-admin';

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

    // Upsert all records in one query (insert or update on conflict)
    const { error } = await supabaseAdmin
      .from('site_metadata')
      .upsert(records, { onConflict: 'key' });

    if (error) {
      console.error('Error updating metadata:', error);
      return NextResponse.json(
        { error: 'Failed to update metadata: ' + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Metadata update error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}
