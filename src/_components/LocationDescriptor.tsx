'use client';

import React, { useMemo, useState } from 'react';
import { locations } from '@/_data/locations';
import { SelectorItem } from '@/app/types/SelectorItem';
import Selector from './Selector';
import Spacer from './Spacer';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants } from '@/_constants/animations';
import { Typography } from './Typography';

const LocationDescriptor = () => {
    const [selectedLocationId, setSelectedLocationId] = useState(
        locations[0].id
    );
    const locationSelectorItems: SelectorItem[] = locations.map((location) => {
        return {
            id: location.id,
            title: location.title,
            onClick: () => setSelectedLocationId(location.id),
        };
    });
    const selectedLocation = useMemo(
        () => locations.find((location) => location.id === selectedLocationId)!,
        [selectedLocationId]
    );
    return (
        <div>
            <Selector
                items={locationSelectorItems}
                selectedItemId={selectedLocationId}
            />
            <Spacer size="md" />
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedLocationId}
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
