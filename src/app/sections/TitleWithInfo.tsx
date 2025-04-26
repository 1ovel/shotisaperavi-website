'use client';

import React from 'react';
import { motion } from 'motion/react';
import Button from '../components/Button';
import { containerVariants, itemVariants } from '../constants/animations';

interface TitleWithInfoProps {
    title: string;
    subtitle: string;
    decoration: string;
    textLeft: string;
    textRight: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const TitleWithInfo = ({
    title,
    subtitle,
    textLeft,
    decoration,
    textRight,
    buttonText,
    onButtonClick,
}: TitleWithInfoProps) => {
    return (
        <motion.section
            className="grid gap-xsSpacing grid-cols-12 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'all' }}
        >
            <motion.div
                className="col-span-12 lg:col-span-3"
                variants={itemVariants}
            >
                <h2 className="uppercase font-heading text-[40px] leading-none">
                    {title}
                </h2>
                <span className="font-decoration text-foregroundDark leading-none text-xl">
                    {decoration}
                </span>
            </motion.div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 grid gap-xsSpacing grid-cols-2">
                <motion.h3
                    className="uppercase text-[20px] lg:text-[24px] col-span-2 whitespace-pre-line"
                    variants={itemVariants}
                >
                    {subtitle}
                </motion.h3>
                <motion.p
                    variants={itemVariants}
                    className="text-foregroundGrey col-span-2 text-[16px] lg:col-span-2"
                >
                    {textLeft}
                </motion.p>
                <motion.p
                    variants={itemVariants}
                    className="text-foregroundGrey col-span-2 text-[16px] lg:col-span-2"
                >
                    {textRight}
                </motion.p>
                <motion.div variants={itemVariants} className="col-span-2">
                    <Button title={buttonText} onClick={onButtonClick} />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TitleWithInfo;
