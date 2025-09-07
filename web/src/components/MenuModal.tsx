'use client';

import { Modal, useModal } from '@faceless-ui/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import closeIcon from '@/images/cross.svg';
import Link from 'next/link';
import { Typography } from './Typography';
import useLocations from '@/hooks/useLocations';

const MenuModal = () => {
    const { toggleModal } = useModal();
    const { locations, isLoading } = useLocations();

    return (
        <Modal
            slug="menu"
            className="flex w-screen h-screen bg-background justify-center items-center relative"
        >
            <Image
                src={closeIcon}
                alt="close"
                className="absolute right-5 top-10"
                onClick={() => toggleModal('menu')}
            />
            <ul className="flex flex-col items-center justify-center gap-xsSpacing">
                {isLoading ? (
                    <div></div>
                ) : (
                    locations.map((l) => (
                        <li key={l.slug + '-link'}>
                            <Link
                                href={`/restaurant/${l.slug}`}
                                onClick={() => toggleModal('menu')}
                            >
                                <Typography
                                    variant="h2"
                                    className="text-foregroundWhite"
                                >
                                    {l.title}
                                </Typography>
                            </Link>
                        </li>
                    ))
                )}
                <li>
                    <Typography variant="h2" className="text-foregroundWhite">
                        Menu
                    </Typography>
                </li>
                <li>
                    <Typography variant="h2" className="text-foregroundWhite">
                        Contact us
                    </Typography>
                </li>
            </ul>
        </Modal>
    );
};

export default MenuModal;
