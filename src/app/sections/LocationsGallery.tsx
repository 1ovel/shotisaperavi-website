'use client';

import React from 'react';
import LocationCard from '../components/LocationCard';
import Spacer from '../components/Spacer';
import { locations } from '../data/locations';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { useWindowSize } from '../hooks/useWindowSize';

const LocationsGallery = () => {
    const { isMobile } = useWindowSize();

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.2 : 0.7 }}
        >
            <motion.div variants={itemVariants}>
                <h2 className="uppercase font-heading text-[40px] leading-none">
                    Locations
                </h2>
                <span className="font-decoration text-foregroundDark leading-none text-xl">
                    ლოკაციები
                </span>
            </motion.div>
            <Spacer size="md" />
            <div className="grid gap-xsSpacing grid-cols-12 w-full">
                {locations.map((location) => {
                    return (
                        <motion.div
                            className="col-span-12 md:col-span-6 lg:col-span-3 aspect-square md:aspect-[2/3]"
                            key={location.title + '-location-card'}
                            variants={itemVariants}
                        >
                            <LocationCard location={location} />
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default LocationsGallery;
