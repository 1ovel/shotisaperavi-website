import React from 'react';

import { locations } from '@/data/locations';
import Footer from '@/components/Footer';
import Spacer from '@/components/Spacer';
import LocationFullInfo from '@/sections/LocationFullInfo';

interface RestaurantProps {
    params: Promise<{ restaurant: string }>;
}

const Restaurant = async ({ params }: RestaurantProps) => {
    const { restaurant } = await params;
    const location = locations.find((l) => l.slug === restaurant)!;

    return (
        <main>
            <div className="flex flex-col min-h-screen">
                <Spacer />
                <LocationFullInfo location={location} />
                <Spacer size="md" />
            </div>
            <Footer />
        </main>
    );
};

export default Restaurant;
