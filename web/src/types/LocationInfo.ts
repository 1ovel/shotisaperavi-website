import { StaticImageData } from 'next/image';
import { Schedule } from './Schedule';
import { MenuInfo } from './MenuInfo';

export interface LocationInfo {
    id: string;
    slug: string;
    title: string;
    address: string;
    description: string;
    fullDescription: string;
    phone: string;
    email: string;
    imageSrc: string | StaticImageData;
    schedule: Schedule;
    menu?: MenuInfo;
    createdAt?: Date;
    updatedAt?: Date;
}
