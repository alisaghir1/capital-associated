import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Get credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.SESSION_SECRET;

    // Validate credentials
    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check if credentials match
    if (username !== adminUsername || password !== adminPassword) {
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Generate session token (valid for 24 hours)
    const sessionToken = jwt.sign(
      { 
        username: adminUsername,
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
      },
      sessionSecret
    );

    // Return success response with token
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      sessionToken,
      user: {
        username: adminUsername,
        role: 'admin'
      }
    });

  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Verify session endpoint
export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'No valid session token' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const sessionSecret = process.env.SESSION_SECRET;

    // Verify the token
    const decoded = jwt.verify(token, sessionSecret);
    
    return NextResponse.json({
      success: true,
      user: {
        username: decoded.username,
        role: decoded.role
      }
    });

  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json(
      { message: 'Invalid or expired session' },
      { status: 401 }
    );
  }
}