'use client';

import Image from 'next/image';
import React from 'react';
import imageTable from '@/_images/table-at-georgian-restaurant.webp';
import { Typography } from '@/_components/Typography';
import Button from '@/_components/Button';

const DashboardContent = () => {
    return (
        <div className="grid grid-cols-12 relative grid-rows-2 gap-xsSpacing">
            <div className="border border-backgroundLight col-span-3 aspect-square">
                <div className="w-full h-full flex flex-col justify-between hover:bg-backgroundLight transition-colors duration-200 p-4 cursor-pointer">
                    <div>
                        <Typography variant="h4">asdad</Typography>
                        <Typography variant="body">
                            Hahaha I am a little monkey
                        </Typography>
                    </div>
                    <Button>asdad</Button>
                </div>
            </div>
            <div className="border border-backgroundLight col-span-3 aspect-square"></div>
            <div className="border border-backgroundLight col-start-10 col-span-3 aspect-square"></div>
            <div className="border border-backgroundLight col-span-6">
                <div className="w-full h-full relative">
                    <Image
                        src={imageTable}
                        alt=""
                        fill
                        className="object-cover brightness-[0.8]"
                    />
                </div>
            </div>
            <div className="border border-backgroundLight col-span-6"></div>
        </div>
    );
};

export default DashboardContent;
