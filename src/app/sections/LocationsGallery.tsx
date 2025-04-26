'use client';

import React from 'react';
import LocationCard from '../components/LocationCard';
import Spacer from '../components/Spacer';
import { locations } from '../data/locations';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { useWindowSize } from '../hooks/useWindowSize';
import { Typography } from '../components/Typography';

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
                <Typography variant="h2">Locations</Typography>
                <Typography variant="decoration">ლოკაციები</Typography>
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
