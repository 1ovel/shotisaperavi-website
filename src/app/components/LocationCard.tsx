import React from 'react';
import { LocationInfo } from '../types/LocationInfo';
import arrowIcon from '../images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

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
                <h4 className="uppercase text-[24px] text-left">
                    {location.title}
                </h4>
                <p className="opacity-0 lg:group-hover:opacity-100 transition-all text-foregroundGrey uppercase text-left">
                    {location.address}
                </p>
            </div>
            <div className="relative z-10 lg:opacity-0 group-hover:opacity-100 transition-all">
                <div className="uppercase text-lg flex items-center gap-4">
                    More info
                    <Image src={arrowIcon} alt="arrow right" />
                </div>
            </div>
        </Link>
    );
};

export default LocationCard;
