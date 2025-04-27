'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Spacer from '../components/Spacer';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { menus } from '../data/menus';
import { SelectorItem } from '../types/SelectorItem';
import { locations } from '../data/locations';
import Image from 'next/image';
import { Typography } from '../components/Typography';
import imageBread from '../images/photo-bread.webp';
import Selector from '../components/Selector';
import Menu from '../components/Menu';

const MenuPage = () => {
    const [selectedLocationId, setSelectedLocationId] = useState(
        locations[0].id
    );
    const [selectedMenuId, setSelectedMenuId] = useState(selectedLocationId);
    const locationSelectorItems: SelectorItem[] = locations.map((location) => {
        return {
            id: location.id,
            title: location.title,
            onClick: () => setSelectedLocationId(location.id),
        };
    });

    useEffect(() => {
        setSelectedMenuId(selectedLocationId);
    }, [selectedLocationId]);

    const selectedMenu = useMemo(() => {
        return menus.find((menu) => menu.id === selectedMenuId);
    }, [selectedMenuId]);
    return (
        <div>
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
                            className="col-span-6 col-start-4 h-full"
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src={imageBread}
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
                            className="absolute w-full h-full"
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
                    <Spacer />
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
            <Footer />
        </div>
    );
};

export default MenuPage;
