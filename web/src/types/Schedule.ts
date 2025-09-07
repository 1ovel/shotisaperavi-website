export type Schedule = ScheduleItem[];

export interface ScheduleItem {
    id: string;
    days: string;
    openTime: string;
    closeTime: string;
    locationId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
