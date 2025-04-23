'use client';

import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { Schedule } from '../types/Schedule';

interface OpeningHoursProps {
    schedule: Schedule;
}

const OpeningHours = ({ schedule }: OpeningHoursProps) => {
    return (
        <motion.section
            className="grid gap-xsSpacing grid-cols-12 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="col-span-12 flex flex-col uppercase text-[24px] text-foregroundGrey">
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
                            <span>{item.days}</span>
                            <span>
                                {item.openTime} - {item.closeTime}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default OpeningHours;
