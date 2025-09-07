'use client';

import Image from 'next/image';
import React from 'react';
import arrowIcon from '@/_images/arrow.svg';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/cn';

interface ButtonProps {
    title?: string;
    href?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
}

const Button = ({
    title,
    href,
    children,
    onClick,
    type = 'button',
    className,
}: ButtonProps) => {
    const { pending } = useFormStatus();
    const content = (
        <>
            {children || title}
            <Image src={arrowIcon} alt="arrow right" />
        </>
    );

    const baseClasses =
        'uppercase text-lg flex items-center gap-4 hover:gap-6 transition-all';

    if (href) {
        return (
            <Link href={href} className={cn(baseClasses, className)}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={cn(baseClasses, className)}
            onClick={onClick}
            type={type}
            disabled={pending}
        >
            {content}
        </button>
    );
};

export default Button;
