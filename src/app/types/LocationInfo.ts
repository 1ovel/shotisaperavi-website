import { StaticImageData } from 'next/image';
import { Schedule } from './Schedule';

export interface LocationInfo {
    slug: string;
    title: string;
    address: string;
    description: string;
    phone: string;
    email: string;
    imageSrc: StaticImageData;
    fullDescription: string;
    schedule: Schedule;
}
