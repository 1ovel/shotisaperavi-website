'use client';

import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import Image from 'next/image';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import { LocationInfo } from '../types/LocationInfo';

interface LocationFullInfoProps {
    location: LocationInfo;
}

const LocationFullInfo = ({ location }: LocationFullInfoProps) => {
    return (
        <motion.section
            className="grid gap-xsSpacing grid-cols-12 grid-rows-2 w-full relative flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                variants={itemVariants}
                className="col-span-6 row-span-2 grid grid-cols-6 grid-rows-1"
            >
                <div className="col-span-4 row-span-1">
                    <Image
                        src={location.imageSrc}
                        alt=""
                        className="object-cover w-full h-full brightness-[0.5]"
                    />
                </div>
            </motion.div>
            <div className="grid leading-none gap-x-xsSpacing grid-cols-12 grid-rows-[140px_140px] w-full font-heading text-[150px] uppercase absolute top-1/2 -translate-y-1/2">
                <motion.h1 variants={itemVariants} className="col-start-2">
                    Rioni
                </motion.h1>
                <motion.h1
                    variants={itemVariants}
                    className="col-start-2 row-start-2 "
                >
                    {location.title}
                </motion.h1>
            </div>
            <div className="col-span-6 row-span-2">
                <motion.div variants={itemVariants}>
                    <h2 className="uppercase font-heading text-[40px] leading-none">
                        {location.address}
                    </h2>
                    <span className="font-decoration text-foregroundDark leading-none text-xl">
                        მენიუ
                    </span>
                </motion.div>
                <Spacer size="md" />
                <div className="flex flex-col gap-2">
                    <motion.p
                        variants={itemVariants}
                        className="text-foregroundGrey text-[16px]"
                    >
                        {location.fullDescription}
                    </motion.p>
                    <div className="flex gap-xsSpacing">
                        <motion.p variants={itemVariants} className="text-foregroundWhite text-[24px] font-extralight">
                            {location.phone}
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-foregroundWhite text-[24px] font-extralight">
                            {location.email}
                        </motion.p>
                    </div>
                </div>
                <Spacer size="md" />
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-2"
                >
                    <Button title="Book a table" />
                    <Button title="Open menu" />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LocationFullInfo;
