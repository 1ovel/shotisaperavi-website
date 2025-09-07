import React from 'react';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Spacer from '@/components/Spacer';
import LocationFullInfo from '@/sections/LocationFullInfo';
import { getLocationWithMenu } from '@/lib/data';

interface RestaurantProps {
    params: Promise<{ restaurant: string }>;
}

const Restaurant = async ({ params }: RestaurantProps) => {
    const { restaurant } = await params;
    const location = await getLocationWithMenu(restaurant);

    if (!location) {
        notFound();
    }

    return (
        <main>
            <div className="flex flex-col min-h-screen">
                <Spacer />
                <LocationFullInfo location={location} />
                <Spacer />
            </div>
            <Footer />
        </main>
    );
};

export default Restaurant;
