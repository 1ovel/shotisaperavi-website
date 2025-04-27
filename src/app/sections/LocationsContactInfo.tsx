'use client';

import React from 'react';
import Spacer from '../components/Spacer';
import LocationDescriptor from '../components/LocationDescriptor';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import imageRestaurant from '../images/restaurant-environment.webp';
import Image from 'next/image';

const LocationsContactInfo = () => {
    return (
        <motion.section
            className="grid gap-xsSpacing grid-cols-12 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="col-span-12 lg:col-span-5">
                <motion.div variants={itemVariants}>
                    <h2 className="uppercase font-heading text-[40px] leading-none">
                        How to find us
                    </h2>
                    <span className="font-decoration text-foregroundDark leading-none text-xl">
                        როგორ გვპოვონ
                    </span>
                </motion.div>
                <Spacer size="md" />
                <motion.div variants={itemVariants}>
                    <LocationDescriptor />
                </motion.div>
            </div>
            <motion.div
                className="col-span-12 lg:col-start-7 lg:col-span-6 bg-backgroundLight aspect-square"
                variants={itemVariants}
            >
                <Image
                    src={imageRestaurant}
                    alt=""
                    className="object-cover w-full h-full brightness-[0.8]"
                />
            </motion.div>
        </motion.section>
    );
};

export default LocationsContactInfo;
