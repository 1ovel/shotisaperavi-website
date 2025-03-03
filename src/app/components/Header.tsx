'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logoImage from '../images/logo.svg';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { useModal } from '@faceless-ui/modal';
import { locations } from '../data/locations';
import Link from 'next/link';

const Header = () => {
    const { toggleModal } = useModal();
    const { scrollY } = useScroll();
    const [isHidden, setIsHidden] = useState(false);
    const [width, setWidth] = useState(window?.innerWidth);
    const { theme } = resolveConfig(tailwindConfig);
    const isMobile = width <= Number(theme.screens.lg.split('px')[0]);
    const variants = {
        hidden: {
            y: '-100%',
        },
        visible: {
            y: '0%',
        },
    };

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    useMotionValueEvent(scrollY, 'change', (current) => {
        const prev = scrollY.getPrevious();
        if (!prev) return;
        const diff = current - prev;
        setIsHidden(diff > 0);
    });

    return (
        <motion.header
            animate={!isHidden || isMobile ? 'visible' : 'hidden'}
            transition={{ duration: 0.13, type: 'tween' }}
            variants={variants}
            className="mx-5 justify-end lg:justify-normal lg:mx-10 flex py-xsSpacing uppercase items-center text-lg fixed min-[2000px]:max-w-[1900px] xl:mx-auto xl:max-w-[1240px] 2xl:max-w-[1500px] left-0 right-0 z-50 min-h-24"
        >
            <nav className="flex-1 hidden lg:block">
                <ul className="flex gap-xsSpacing">
                    {locations.map((l) => (
                        <Link
                            key={l.slug + '-menu-link'}
                            href={`/restaurant/${l.slug}`}
                            className="group"
                        >
                            {l.title}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-foregroundWhite"></span>
                        </Link>
                    ))}
                </ul>
            </nav>

            <Link href={'/'}>
                <Image
                    src={logoImage}
                    className="hidden lg:block w-36 lg:w-48"
                    alt="Rioni logo"
                />
            </Link>

            <nav className="flex-1 hidden lg:block">
                <ul className="flex gap-xsSpacing justify-end">
                    <li>Menu</li>
                    <li>Contact us</li>
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
        </motion.header>
    );
};

export default Header;
