import Image from 'next/image';
import React from 'react';
import arrowIcon from '../images/arrow.svg';
import Link from 'next/link';

interface ButtonProps {
    title?: string;
    href?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ title, href, children, onClick }: ButtonProps) => {
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
        >
            {content}
        </button>
    );
};

export default Button;
