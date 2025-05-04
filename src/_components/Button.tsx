'use client';

import Image from 'next/image';
import React from 'react';
import arrowIcon from '@/_images/arrow.svg';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
    title?: string;
    href?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
}

const Button = ({
    title,
    href,
    children,
    onClick,
    type = 'button',
}: ButtonProps) => {
    const { pending } = useFormStatus();
    const content = (
        <>
            {children || title}
            <Image src={arrowIcon} alt="arrow right" />
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="uppercase text-lg flex items-center gap-4 hover:gap-6 transition-all"
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className="uppercase text-lg flex items-center gap-4 hover:gap-6 transition-all"
            onClick={onClick}
            type={type}
            disabled={pending}
        >
            {content}
        </button>
    );
};

export default Button;
