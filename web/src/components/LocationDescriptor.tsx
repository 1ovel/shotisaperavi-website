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

const LocationDescriptor = () => {
    const [locations, setLocations] = useState<LocationInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLocationId, setSelectedLocationId] = useState<string>('');

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const locationsData = await getLocations();
                setLocations(locationsData);
                if (locationsData.length > 0) {
                    setSelectedLocationId(locationsData[0].id);
                }
            } catch (error) {
                console.error('Error loading locations:', error);
            } finally {
                setLoading(false);
            }
        };

        loadLocations();
    }, []);

    const locationSelectorItems: SelectorItem[] = locations.map((location) => {
        return {
            id: location.id,
            title: location.title,
            onClick: () => setSelectedLocationId(location.id),
        };
    });

    const selectedLocation = useMemo(
        () => locations.find((location) => location.id === selectedLocationId),
        [selectedLocationId, locations]
    );

    if (loading) {
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
                            {selectedLocation.title}
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
