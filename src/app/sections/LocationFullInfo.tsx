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
                        <motion.h1
                            variants={itemVariants}
                            className="text-[60px] sm:text-[80px] lg:text-[130px] xl:text-[150px] uppercase font-heading text-center lg:text-left lg:col-start-2 lg:col-span-4"
                        >
                            {location.title}
                        </motion.h1>
                    </motion.div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-6 row-span-1 lg:row-span-2 order-2 lg:order-none">
                <motion.div variants={itemVariants}>
                    <h2 className="uppercase font-heading text-[28px] sm:text-[32px] lg:text-[40px] leading-tight">
                        {location.address}
                    </h2>
                    <span className="font-decoration text-foregroundDark leading-none text-lg sm:text-xl">
                        მენიუ
                    </span>
                </motion.div>
                <Spacer size="md" />
                <div className="flex flex-col gap-2">
                    <motion.p
                        variants={itemVariants}
                        className="text-foregroundGrey text-[14px] sm:text-[16px]"
                    >
                        {location.fullDescription}
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-xsSpacing">
                        <motion.p
                            variants={itemVariants}
                            className="text-foregroundWhite text-[20px] sm:text-[24px] font-extralight"
                        >
                            {location.phone}
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-foregroundWhite text-[20px] sm:text-[24px] font-extralight"
                        >
                            {location.email}
                        </motion.p>
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
                    <Button title="Book a table" />
                    <Button title="Open menu" />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LocationFullInfo;
