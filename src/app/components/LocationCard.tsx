import React from 'react';
import { LocationInfo } from '../types/LocationInfo';
import arrowIcon from '../images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from './Typography';

interface LocationCardProps {
    location: LocationInfo;
}

const LocationCard = ({ location }: LocationCardProps) => {
    return (
        <Link
            href={`/restaurant/${location.slug}`}
            className="flex flex-col justify-between group bg-backgroundLight p-xsSpacing w-full h-full relative"
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={location.imageSrc}
                    alt=""
                    className="pointer-events-none object-cover w-full h-full brightness-[0.8] lg:group-hover:brightness-[0.4] transition-all scale-100 lg:group-hover:scale-[102%]"
                />
            </div>
            <div className="relative z-10">
                <Typography variant="h4" className="text-left">
                    {location.title}
                </Typography>
                <Typography
                    variant="body"
                    className="opacity-0 lg:group-hover:opacity-100 transition-all uppercase text-left"
                >
                    {location.address}
                </Typography>
            </div>
            <div className="relative z-10 lg:opacity-0 group-hover:opacity-100 transition-all">
                <Typography
                    variant="button"
                    className="flex items-center gap-4"
                >
                    More info
                    <Image src={arrowIcon} alt="arrow right" />
                </Typography>
            </div>
        </Link>
    );
};

export default LocationCard;
