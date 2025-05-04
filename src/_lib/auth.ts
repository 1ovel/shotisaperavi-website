'use server';

import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

type SessionPayload = {
    userId: string;
};

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const comparePasswords = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = async (userId: string): Promise<string> => {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7d')
        .sign(secret);
    return token;
};

export const verifyToken = async (
    token: string
): Promise<SessionPayload | null> => {
    try {
        if (!JWT_SECRET) {
            return null;
        }
        const secret = new TextEncoder().encode(JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload as SessionPayload;
    } catch {
        return null;
    }
};

export const login = async (_: unknown, formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Email and password are required' };
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return { error: 'Invalid credentials' };
    }

    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
        return { error: 'Invalid credentials' };
    }

    const token = await generateToken(user.id);
    (await cookies()).set('session', token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60,
    });

    redirect('/admin/dashboard');
};

export const logout = async () => {
    (await cookies()).delete('session');
    redirect('/admin/login');
};
