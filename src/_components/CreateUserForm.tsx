'use client';

import React from 'react';
import { Input } from './Input';
import Button from './Button';
import { createUser } from '@/_lib/users';
import { useActionState } from 'react';
import { Typography } from './Typography';
import { motion } from 'motion/react';

const CreateUserForm = () => {
    const [state, formAction] = useActionState(createUser, undefined);

    return (
        <form
            action={formAction}
            autoComplete="off"
            className="col-span-1 flex flex-col gap-4 p-5 border border-backgroundLight h-fit"
        >
            <Typography variant="h4">New User</Typography>
            <Input
                id="email"
                name="email"
                type="email"
                label="Email address"
                required
                placeholder="Email"
                autoComplete="off"
            />
            <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                required
                placeholder="Password"
                autoComplete="new-password"
            />
            <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm password"
                required
                placeholder="Confirm password"
                autoComplete="new-password"
            />

            {state?.error && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-center items-center bg-red-500/30 p-2"
                >
                    <Typography variant="caption" className="text-red-400">
                        {state.error}
                    </Typography>
                </motion.div>
            )}

            <Button type="submit" className="mt-2">
                Create New User
            </Button>
        </form>
    );
};

export default CreateUserForm;
