'use client';

import React, { useMemo, useState } from 'react';
import { locations } from '../data/locations';
import { SelectorItem } from '../types/SelectorItem';
import Selector from './Selector';
import Spacer from './Spacer';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants } from '../constants/animations';
import { Typography } from './Typography';

const LocationDescriptor = () => {
    const [selectedLocationTitle, setSelectedLocationTitle] = useState(
        locations[0].title
    );
    const locationSelectorItems: SelectorItem[] = locations.map((locaiton) => {
        return {
            title: locaiton.title,
            onClick: () => setSelectedLocationTitle(locaiton.title),
        };
    });
    const selectedLocation = useMemo(
        () =>
            locations.find(
                (location) => location.title === selectedLocationTitle
            )!,
        [selectedLocationTitle]
    );
    return (
        <div>
            <Selector
                items={locationSelectorItems}
                selectedItemTitle={selectedLocationTitle}
            />
            <Spacer size="md" />
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedLocationTitle}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Typography
                        variant="h3"
                        className="mb-xsSpacing text-foregroundWhite"
                    >
                        {selectedLocation.address}
                    </Typography>
                    <Typography variant="body" className="mb-xsSpacing">
                        {selectedLocation.description}
                    </Typography>
                    <Typography variant="descriptor">
                        {selectedLocation.phone}
                    </Typography>
                    <Typography variant="descriptor">
                        {selectedLocation.email}
                    </Typography>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LocationDescriptor;
