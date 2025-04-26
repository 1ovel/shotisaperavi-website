'use client';

import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { Schedule } from '../types/Schedule';
import { Typography } from '../components/Typography';

interface OpeningHoursProps {
    schedule: Schedule;
}

const OpeningHours = ({ schedule }: OpeningHoursProps) => {
    return (
        <motion.section
            className="grid gap-xsSpacing grid-cols-12 w-full"
            variants={containerVariants}
        >
            <div className="col-span-12 flex flex-col">
                {schedule.map((item, index) => {
                    const isLast = schedule.length === index + 1;
                    return (
                        <motion.div
                            variants={itemVariants}
                            className={
                                !isLast
                                    ? 'flex w-full items-center justify-between border-b border-backgroundLight py-xsSpacing'
                                    : 'flex w-full items-center justify-between py-xsSpacing'
                            }
                            key={item.days + 'schedule-item'}
                        >
                            <Typography
                                variant="descriptor"
                                className="uppercase"
                            >
                                {item.days}
                            </Typography>
                            <Typography variant="descriptor">
                                {item.openTime} - {item.closeTime}
                            </Typography>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default OpeningHours;
