'use client';

import { Input } from '@/components/Input';
import React, { useActionState } from 'react';
import Button from './Button';
import { login } from '@/_lib/auth';
import { Typography } from './Typography';

const LoginForm = () => {
    const [state, loginAction] = useActionState(login, undefined);

    return (
        <form action={loginAction} className="space-y-6">
            <div className="flex flex-col gap-2">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    autoComplete="email"
                    required
                    placeholder="Email"
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                />
            </div>

            {state?.error && (
                <div className="flex justify-center items-center bg-red-500/30 p-2">
                    <Typography variant="caption" className="text-red-400">
                        {state.error}
                    </Typography>
                </div>
            )}
            <div>
                <Button type="submit">Sign in</Button>
            </div>
        </form>
    );
};

export default LoginForm;
