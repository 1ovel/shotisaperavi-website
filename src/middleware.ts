import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './_lib/auth';

const publicRoutes = ['/admin/login'];

export async function middleware(request: NextRequest) {
    const isAccessingPublicRoute = publicRoutes.includes(
        request.nextUrl.pathname
    );

    const cookie = request.cookies.get('session')?.value;

    if (isAccessingPublicRoute && !cookie) {
        return NextResponse.next();
    }

    if (!cookie) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const session = await verifyToken(cookie);

    if (isAccessingPublicRoute && !session) {
        return NextResponse.next();
    }

    if (!session) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    if (isAccessingPublicRoute) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
