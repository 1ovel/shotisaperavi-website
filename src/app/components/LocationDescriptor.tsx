'use client';

import React, { useMemo, useState } from 'react';
import { locations } from '../data/locations';
import { SelectorItem } from '../types/SelectorItem';
import Selector from './Selector';
import Spacer from './Spacer';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants } from '../constants/animations';

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
                    <h3 className="text-foregroundWhite text-[24px] mb-xsSpacing uppercase">
                        {selectedLocation.address}
                    </h3>
                    <p className="text-foregroundGrey text-[16px] mb-xsSpacing">
                        {selectedLocation.description}
                    </p>
                    <p className="text-foregroundWhite text-[24px] font-extralight">
                        {selectedLocation.phone}
                    </p>
                    <p className="text-foregroundWhite text-[24px] font-extralight">
                        {selectedLocation.email}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LocationDescriptor;
