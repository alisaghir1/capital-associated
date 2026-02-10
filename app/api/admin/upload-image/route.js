import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase-admin';

/**
 * API route to upload base64 images to Supabase Storage
 * This runs on the server and bypasses RLS using service role key
 */
export async function POST(request) {
  try {
    const { base64Data, fileName, bucket = 'images' } = await request.json();

    // Validate input
    if (!base64Data || !fileName) {
      return NextResponse.json(
        { error: 'Missing base64Data or fileName' },
        { status: 400 }
      );
    }

    // Check if this is actually a base64 data URL
    if (!base64Data.startsWith('data:')) {
      // Already a URL, return it as-is
      return NextResponse.json({ url: base64Data });
    }

    // Extract the base64 content and mime type
    const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return NextResponse.json(
        { error: 'Invalid base64 data format' },
        { status: 400 }
      );
    }

    const mimeType = matches[1];
    const base64Content = matches[2];

    // Convert base64 to buffer
    const buffer = Buffer.from(base64Content, 'base64');

    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    const extension = mimeType.split('/')[1] || 'jpg';
    const uniqueFileName = `${timestamp}-${randomStr}-${fileName.replace(/\.[^/.]+$/, '')}.${extension}`;

    // Upload to Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(uniqueFileName, buffer, {
        contentType: mimeType,
        upsert: false
      });

    if (error) {
      console.error('Supabase storage upload error:', error);
      return NextResponse.json(
        { error: 'Failed to upload image: ' + error.message },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from(bucket)
      .getPublicUrl(uniqueFileName);

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    );
  }
}
