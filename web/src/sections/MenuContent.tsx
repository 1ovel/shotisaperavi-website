'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Spacer from '@/components/Spacer';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/constants/animations';
import { menus } from '@/data/menus';
import { SelectorItem } from '@/types/SelectorItem';
import { locations } from '@/data/locations';
import Image from 'next/image';
import { Typography } from '@/components/Typography';
import imageMenu from '@/images/menu-photo.webp';
import Selector from '@/components/Selector';
import Menu from '@/components/Menu';
import { useSearchParams, useRouter } from 'next/navigation';
import { useWindowSize } from '@/hooks/useWindowSize';

const MenuContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const locationIdFromUrl = searchParams.get('location');
    const { isMobile } = useWindowSize();

    const [selectedLocationId, setSelectedLocationId] = useState(
        locationIdFromUrl &&
            locations.some((loc) => loc.id === locationIdFromUrl)
            ? locationIdFromUrl
            : locations[0].id
    );
    const [selectedMenuId, setSelectedMenuId] = useState(selectedLocationId);

    const locationSelectorItems: SelectorItem[] = locations.map((location) => {
        return {
            id: location.id,
            title: location.title,
            onClick: () => {
                setSelectedLocationId(location.id);
                router.push(`/menu?location=${location.id}`);
            },
        };
    });

    useEffect(() => {
        if (locationIdFromUrl) {
            setSelectedMenuId(
                locations.some((loc) => loc.id === locationIdFromUrl)
                    ? locationIdFromUrl
                    : selectedLocationId
            );
            setSelectedLocationId(
                locations.some((loc) => loc.id === locationIdFromUrl)
                    ? locationIdFromUrl
                    : selectedLocationId
            );
            return;
        }
        setSelectedMenuId(selectedLocationId);
    }, [selectedLocationId, locationIdFromUrl]);

    const selectedMenu = useMemo(() => {
        return menus.find((menu) => menu.id === selectedMenuId);
    }, [selectedMenuId]);

    return (
        <motion.div
            variants={containerVariants}
            className="min-h-screen"
            initial="hidden"
            animate="visible"
        >
            <Spacer />
            <motion.div variants={itemVariants}>
                <motion.div
                    className="grid lg:gap-xsSpacing grid-cols-12 w-full h-72 relative"
                    variants={itemVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="col-span-12 lg:col-span-6 lg:col-start-4 h-full "
                    >
                        <div className="w-full h-full relative">
                            <Image
                                src={imageMenu}
                                alt=""
                                fill
                                className="object-cover brightness-[0.8]"
                            />
                            <motion.div
                                variants={itemVariants}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <Typography
                                    variant="h1"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%]"
                                >
                                    Menu
                                </Typography>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="absolute w-full h-full hidden lg:block"
                    >
                        <Typography
                            variant="decoration"
                            className="absolute top-0 left-0"
                        >
                            ღვინო
                        </Typography>
                        <Typography
                            variant="decoration"
                            className="absolute bottom-0 left-0 lg:left-auto lg:right-0"
                        >
                            საკვები
                        </Typography>
                    </motion.div>
                </motion.div>
                <Spacer size={isMobile ? 'md' : 'lg'} />
                <motion.div variants={itemVariants}>
                    <Selector
                        items={locationSelectorItems}
                        selectedItemId={selectedLocationId}
                    />
                </motion.div>
                <Spacer size="md" />
                <motion.div
                    variants={itemVariants}
                    className="h-0 border-t border-backgroundLight w-full bg-backgroundLight"
                />
            </motion.div>
            <Spacer size="md" />
            {selectedMenu && (
                <motion.div variants={itemVariants}>
                    <Menu menu={selectedMenu} />
                </motion.div>
            )}
            <Spacer />
        </motion.div>
    );
};

export default MenuContent;
