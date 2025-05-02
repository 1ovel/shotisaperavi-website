'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logoImage from '../images/logo.svg';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useModal } from '@faceless-ui/modal';
import { locations } from '../data/locations';
import Link from 'next/link';
import NavLink from './NavLink';
import { useWindowSize } from '../hooks/useWindowSize';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');
    const { toggleModal } = useModal();
    const { scrollY } = useScroll();
    const [isHidden, setIsHidden] = useState(false);
    const { isMobile } = useWindowSize();

    useMotionValueEvent(scrollY, 'change', (current) => {
        const prev = scrollY.getPrevious();
        if (!prev) return;
        const diff = current - prev;
        setIsHidden(diff > 0);
    });

    if (isAdminPage) return null;

    const variants = {
        hidden: {
            y: '-100%',
        },
        visible: {
            y: '0%',
        },
    };

    return (
        <motion.header
            animate={!isHidden || isMobile ? 'visible' : 'hidden'}
            transition={{ duration: 0.13, type: 'tween' }}
            variants={variants}
            className="fixed top-0 left-0 right-0 z-50 min-h-24 flex py-xsSpacing items-center bg-gradient-to-b from-background to-transparent w-full"
        >
            <div className="w-full flex justify-between lg:justify-normal min-[2000px]:max-w-[1900px] xl:mx-auto xl:max-w-[1240px] 2xl:max-w-[1500px] mx-5 md:mx-10">
                <nav className="flex-1 hidden lg:block">
                    <ul className="flex gap-xsSpacing">
                        {locations.map((l) => (
                            <NavLink
                                key={l.slug + '-link'}
                                slug={l.slug}
                                title={l.title}
                                href={`/restaurant/${l.slug}`}
                            />
                        ))}
                    </ul>
                </nav>

                <Link href={'/'}>
                    <Image
                        src={logoImage}
                        className="w-48 lg:w-72"
                        alt="Shoti & Saperavi logo"
                    />
                </Link>

                <nav className="flex-1 hidden lg:block">
                    <ul className="flex gap-xsSpacing justify-end">
                        <NavLink slug="menu" title="Our Menu" href="/menu" />
                    </ul>
                </nav>

                <button
                    className="lg:hidden flex flex-col gap-1.5"
                    onClick={() => toggleModal('menu')}
                >
                    <span className="block w-7 h-0.5 bg-current" />
                    <span className="block w-3 h-0.5 bg-current" />
                    <span className="block w-7 h-0.5 bg-current" />
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
