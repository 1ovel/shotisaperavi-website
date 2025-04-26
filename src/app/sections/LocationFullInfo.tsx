'use client';

import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import Image from 'next/image';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import { LocationInfo } from '../types/LocationInfo';
import { usePathname } from 'next/navigation';
import OpeningHours from './OpeningHours';
import { Typography } from '../components/Typography';

interface LocationFullInfoProps {
    location: LocationInfo;
}

const LocationFullInfo = ({ location }: LocationFullInfoProps) => {
    const pathname = usePathname();

    return (
        <motion.section
            key={pathname}
            className="grid gap-xsSpacing grid-cols-12 grid-rows-auto w-full relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="col-span-12 2xl:col-span-6 row-span-1 2xl:row-span-2 relative order-1 2xl:order-none mb-4 2xl:mb-0">
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-6 grid-rows-1 h-full"
                >
                    <div className="col-span-6 2xl:col-span-4 row-span-1 h-48 sm:h-64 2xl:h-full">
                        <Image
                            src={location.imageSrc}
                            alt=""
                            className="object-cover w-full h-full brightness-[0.8]"
                        />
                    </div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center 2xl:block 2xl:inset-auto 2xl:top-1/2 2xl:-translate-y-1/2">
                    <motion.div
                        variants={itemVariants}
                        className="w-full 2xl:grid 2xl:grid-cols-6 2xl:grid-rows-1"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center 2xl:text-left 2xl:col-start-2 2xl:col-span-4"
                        >
                            <Typography variant="h1">
                                {location.title}
                            </Typography>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="col-span-12 2xl:col-span-6 row-span-1 2xl:row-span-2 order-2 2xl:order-none">
                <motion.div variants={itemVariants}>
                    <Typography variant="h3">{location.address}</Typography>
                    <Typography variant="decoration">მენიუ</Typography>
                </motion.div>
                <Spacer size="md" />
                <div className="flex flex-col gap-2">
                    <motion.div variants={itemVariants}>
                        <Typography variant="caption">
                            {location.fullDescription}
                        </Typography>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-xsSpacing">
                        <motion.div variants={itemVariants}>
                            <Typography variant="descriptor">
                                {location.phone}
                            </Typography>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Typography variant="descriptor">
                                {location.email}
                            </Typography>
                        </motion.div>
                    </div>
                </div>

                <Spacer size="md" />

                <motion.div variants={itemVariants}>
                    <OpeningHours schedule={location.schedule} />
                </motion.div>

                <Spacer size="md" />

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-2 mb-8 2xl:mb-0"
                >
                    <Button href={`/menu?location=${location.id}`}>
                        View Menu
                    </Button>
                    <Button href={`/about?location=${location.id}`}>
                        About Us
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LocationFullInfo;
