export type Schedule = ScheduleItem[];

export interface ScheduleItem {
    days: string;
    openTime: string;
    closeTime: string;
}
