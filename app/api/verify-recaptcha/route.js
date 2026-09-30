import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const SECRET = process.env.RECAPTCHA_SECRET_KEY;
const MIN_SCORE = 0.5;

/**
 * POST { token, action } — verifies a reCAPTCHA v3 token with Google.
 * Returns { ok: true } when the token is valid, matches the action, and meets the score threshold.
 * If no secret is configured, verification is skipped (development only) and a warning is logged.
 */
export async function POST(request) {
  try {
    const { token, action } = await request.json();

    if (!SECRET) {
      console.warn('[recaptcha] RECAPTCHA_SECRET_KEY not set — skipping verification');
      return NextResponse.json({ ok: true, skipped: true });
    }

    if (!token || typeof token !== 'string') {
      return NextResponse.json({ ok: false, error: 'Missing token' }, { status: 400 });
    }

    const params = new URLSearchParams({ secret: SECRET, response: token });
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) params.set('remoteip', forwardedFor.split(',')[0].trim());

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = await res.json();

    const ok =
      data.success === true &&
      (!action || data.action === action) &&
      (typeof data.score !== 'number' || data.score >= MIN_SCORE);

    if (!ok) {
      console.warn('[recaptcha] verification failed', { action: data.action, score: data.score, errors: data['error-codes'] });
      return NextResponse.json({ ok: false, error: 'Verification failed' }, { status: 403 });
    }

    return NextResponse.json({ ok: true, score: data.score });
  } catch (error) {
    console.error('[recaptcha] error:', error);
    return NextResponse.json({ ok: false, error: 'Verification error' }, { status: 500 });
  }
}
