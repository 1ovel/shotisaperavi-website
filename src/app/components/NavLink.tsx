import Link from 'next/link';
import React from 'react';
import { Typography } from './Typography';

interface NavLinkProps {
    slug: string;
    title: string;
    href: string;
}

const NavLink = ({ slug, title, href }: NavLinkProps) => {
    return (
        <Link key={slug + '-menu-link'} href={href} className="group">
            <Typography variant="button">{title}</Typography>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-foregroundWhite"></span>
        </Link>
    );
};

export default NavLink;
