import React from 'react';
import { Typography } from './Typography';
import Link from 'next/link';
import Image from 'next/image';
import arrowIcon from '@/_images/arrow.svg';

interface DashboardCardProps {
    title: string;
    description: string;
    link: string;
}

const DashboardCard = ({ title, description, link }: DashboardCardProps) => {
    return (
        <Link
            href={link}
            className="w-full h-full flex flex-col justify-between hover:bg-backgroundLight transition-colors duration-200 p-4 cursor-pointer group"
        >
            <div>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body">{description}</Typography>
            </div>
            <div className="relative z-10">
                <Typography
                    variant="button"
                    className="flex items-center gap-4"
                >
                    Open
                    <Image
                        className="group-hover:translate-x-1 transition-all duration-200"
                        src={arrowIcon}
                        alt="arrow right"
                    />
                </Typography>
            </div>
        </Link>
    );
};

export default DashboardCard;
