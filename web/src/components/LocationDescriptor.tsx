'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { LocationInfo } from '@/types';
import { SelectorItem } from '@/types/SelectorItem';
import Selector from './Selector';
import Spacer from './Spacer';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants } from '@/constants/animations';
import { Typography } from './Typography';
import { getLocations } from '@/lib/data';
import useLocations from '@/hooks/useLocations';

const LocationDescriptor = () => {
    const { locations, isLoading } = useLocations();
    const [selectedLocationId, setSelectedLocationId] = useState<string>('');
    const selectedLocation = useMemo(
        () => locations.find((location) => location.id === selectedLocationId),
        [selectedLocationId, locations]
    );

    useEffect(() => {
        if (locations.length > 0) {
            setSelectedLocationId(locations[0].id);
        }
    }, [locations]);

    const locationSelectorItems: SelectorItem[] = locations.map((location) => {
        return {
            id: location.id,
            title: location.title,
            onClick: () => setSelectedLocationId(location.id),
        };
    });

    if (isLoading) {
        return <div></div>;
    }

    return (
        <div>
            <Selector
                items={locationSelectorItems}
                selectedItemId={selectedLocationId}
            />
            <Spacer size="md" />
            <AnimatePresence mode="wait">
                {selectedLocation && (
                    <motion.div
                        key={selectedLocation.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Typography variant="h3" className="mb-4">
                            {selectedLocation.address}
                        </Typography>
                        <Typography variant="body" className="mb-4">
                            {selectedLocation.description}
                        </Typography>
                        <Typography variant="descriptor" className="mb-4">
                            {selectedLocation.phone}
                        </Typography>
                        <Typography variant="descriptor">
                            {selectedLocation.email}
                        </Typography>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LocationDescriptor;
