'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Spacer from '@/components/Spacer';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/constants/animations';
import { SelectorItem } from '@/types/SelectorItem';
import { LocationInfo, MenuInfo } from '@/types';
import Image from 'next/image';
import { Typography } from '@/components/Typography';
import imageMenu from '@/images/menu-photo.webp';
import Selector from '@/components/Selector';
import Menu from '@/components/Menu';
import { useSearchParams, useRouter } from 'next/navigation';
import { useWindowSize } from '@/hooks/useWindowSize';
import { getLocations, getMenus } from '@/lib/data';

const MenuContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const locationIdFromUrl = searchParams.get('location');
    const { isMobile } = useWindowSize();

    const [locations, setLocations] = useState<LocationInfo[]>([]);
    const [menus, setMenus] = useState<MenuInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLocationId, setSelectedLocationId] = useState<string>('');
    const [selectedMenuId, setSelectedMenuId] = useState<string>('');

    useEffect(() => {
        const loadData = async () => {
            try {
                const [locationsData, menusData] = await Promise.all([
                    getLocations(),
                    getMenus()
                ]);
                
                setLocations(locationsData);
                setMenus(menusData);
                
                if (locationIdFromUrl && locationsData.some((loc) => loc.id === locationIdFromUrl)) {
                    setSelectedLocationId(locationIdFromUrl);
                    setSelectedMenuId(locationIdFromUrl);
                } else if (locationsData.length > 0) {
                    setSelectedLocationId(locationsData[0].id);
                    setSelectedMenuId(locationsData[0].id);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [locationIdFromUrl]);

    useEffect(() => {
        if (locationIdFromUrl && locations.length > 0) {
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
    }, [selectedLocationId, locationIdFromUrl, locations]);

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

    const selectedMenu = useMemo(() => {
        return menus.find((menu) => menu.locationId === selectedMenuId);
    }, [selectedMenuId, menus]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                
            </div>
        );
    }

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
