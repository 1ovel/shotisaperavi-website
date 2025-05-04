'use client';

import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '@/_constants/animations';
import Image from 'next/image';
import Spacer from '@/_components/Spacer';
import Button from '@/_components/Button';
import { LocationInfo } from '@/app/types/LocationInfo';
import { usePathname } from 'next/navigation';
import OpeningHours from './OpeningHours';
import { Typography } from '@/_components/Typography';

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
            <div className="col-span-12 lg:col-span-6 row-span-1 lg:row-span-2 relative order-1 lg:order-none mb-4 lg:mb-0">
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-6 grid-rows-1 h-full"
                >
                    <div className="col-span-6 lg:col-span-4 row-span-1 h-48 sm:h-64 lg:h-full">
                        <Image
                            src={location.imageSrc}
                            alt=""
                            className="object-cover w-full h-full brightness-[0.8]"
                        />
                    </div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center lg:block lg:inset-auto lg:top-1/2 lg:-translate-y-1/2">
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:grid lg:grid-cols-6 lg:grid-rows-1"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center lg:text-left lg:col-start-2 lg:col-span-4"
                        >
                            <Typography
                                variant="h1"
                                className="lg:text-[90px] xl:text-[120px] 2xl:text-[140px] 3xl:text-[170px]"
                            >
                                {location.title}
                            </Typography>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-6 row-span-1 lg:row-span-2 order-2 lg:order-none">
                <motion.div variants={itemVariants}>
                    <Typography variant="h3">{location.address}</Typography>
                    <Typography variant="decoration">მენიუ</Typography>
                </motion.div>
                <Spacer size="md" />
                <div className="flex flex-col gap-2">
                    <motion.div variants={itemVariants}>
                        <Typography variant="body">
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
                    className="flex flex-col gap-2 mb-8 lg:mb-0"
                >
                    <Button href={`/menu?location=${location.id}`}>
                        Open Menu
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LocationFullInfo;
