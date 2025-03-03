import React from 'react';
import Spacer from '../../components/Spacer';
import LocationFullInfo from '../../sections/LocationFullInfo';
import OpeningHours from '@/app/sections/OpeningHours';
import { locations } from '@/app/data/locations';
import Footer from '@/app/components/Footer';

interface RestaurantProps {
    params: Promise<{ restaurant: string }>;
}

const Restaurant = async ({ params }: RestaurantProps) => {
    const { restaurant } = await params;
    const location = locations.find((l) => l.slug === restaurant)!;

    return (
        <main>
            <div className="h-screen flex flex-col">
                <Spacer />
                <LocationFullInfo location={location} />
                <Spacer />
            </div>
            <Spacer size="md" />
            <OpeningHours schedule={location.schedule} />
            <Spacer />
            <Footer />
        </main>
    );
};

export default Restaurant;
