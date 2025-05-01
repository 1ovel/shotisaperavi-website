import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request: NextRequest) {
    const token = request.headers.get('authorization')?.split(' ')[1];

    // List of public paths that don't require authentication
    const publicPaths = ['/api/auth/login'];

    // Allow public paths
    if (publicPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.json(
            { error: 'Authentication required' },
            { status: 401 }
        );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Add user ID to request headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.userId);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: '/api/:path*',
};
