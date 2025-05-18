'use server';

import { PrismaClient, User } from '@prisma/client';
import { hashPassword } from './auth';

const prisma = new PrismaClient();

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};

export const createUser = async (_: unknown, formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Email and password are required' };
    }
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        return { error: 'User already exists' };
    }

    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
        data: { email, password: hashedPassword },
    });
};

export const updateUser = async (user: User) => {
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: user,
    });
    return updatedUser;
};

export const deleteUser = async (id: string) => {
    const deletedUser = await prisma.user.delete({
        where: { id },
    });
    return deletedUser;
};

export const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
};
