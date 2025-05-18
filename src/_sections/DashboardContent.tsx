'use client';

import Image from 'next/image';
import React from 'react';
import imageTable from '@/_images/table-at-georgian-restaurant.webp';
import DashboardCard from '@/_components/DashboardCard';

const DashboardContent = () => {
    return (
        <div className="grid grid-cols-12 relative grid-rows-2 gap-xsSpacing">
            <div className="border border-backgroundLight col-span-12 lg:col-span-3 aspect-square">
                <DashboardCard
                    title="User management"
                    description="Add, edit and delete admin users"
                    link="/admin/users"
                />
            </div>
            <div className="border border-backgroundLight col-span-12 lg:col-span-3 aspect-square">
                <DashboardCard
                    title="Locations & menu"
                    description="Edit locations and menu"
                    link="/admin/locations"
                />
            </div>
            <div className="border border-backgroundLight col-span-12 lg:col-span-6 aspect-square lg:aspect-auto">
                <DashboardCard
                    title="Table booking"
                    description="Manage table bookings"
                    link="/admin/table-booking"
                />
            </div>
            <div className="border border-backgroundLight hidden lg:block lg:col-span-6 aspect-square lg:aspect-auto">
                <div className="w-full h-full relative">
                    <Image
                        src={imageTable}
                        alt=""
                        fill
                        className="object-cover brightness-[0.8]"
                    />
                </div>
            </div>
            <div className="border border-backgroundLight lg:col-start-10 col-span-12 lg:col-span-3 aspect-square lg:aspect-auto">
                <DashboardCard
                    title="News"
                    description="Publish and edit news"
                    link="/admin/news"
                />
            </div>
        </div>
    );
};

export default DashboardContent;
