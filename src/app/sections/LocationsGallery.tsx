'use client';

import React from 'react';
import LocationCard from '../components/LocationCard';
import Spacer from '../components/Spacer';
import { locations } from '../data/locations';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';

const LocationsGallery = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
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
            <div className="grid gap-xsSpacing grid-cols-6 lg:grid-cols-12 w-full">
                {locations.map((location) => {
                    return (
                        <motion.div
                            className="col-span-3 aspect-[2/3]"
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
