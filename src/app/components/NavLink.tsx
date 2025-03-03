import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
    slug: string;
    title: string;
    href: string;
}

const NavLink = ({ slug, title, href }: NavLinkProps) => {
    return (
        <Link key={slug + '-menu-link'} href={href} className="group">
            {title}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-foregroundWhite"></span>
        </Link>
    );
};

export default NavLink;
