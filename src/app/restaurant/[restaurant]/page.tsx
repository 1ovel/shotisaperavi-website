import React from 'react';

import { locations } from '@/_data/locations';
import Footer from '@/_components/Footer';
import Spacer from '@/_components/Spacer';
import LocationFullInfo from '@/_sections/LocationFullInfo';

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
