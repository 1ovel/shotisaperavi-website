'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography } from '../components/Typography';
import Button from '../components/Button';
import Image from 'next/image';
import imageTableAlt from '@/app/images/photo-table-alt.webp';
import { Input } from '@/components/Input';
import { motion } from 'motion/react';

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            localStorage.setItem('token', data.token);

            router.push('/admin/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <Typography variant="h2">Login</Typography>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Email address"
                                autoComplete="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setEmail(e.target.value)}
                            />
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && (
                            <motion.div
                                className="text-red-500 bg-red-900/30 p-2 text-sm text-center font-display"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {error}
                            </motion.div>
                        )}
                        <div>
                            <Button>Sign in</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 relative">
                <Image
                    fill
                    src={imageTableAlt}
                    alt="Shoti & Saperavi"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
