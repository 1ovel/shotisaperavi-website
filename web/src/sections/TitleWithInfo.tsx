'use client';

import React from 'react';
import { motion } from 'motion/react';
import Button from '@/components/Button';
import { containerVariants, itemVariants } from '@/constants/animations';
import { Typography } from '@/components/Typography';

interface TitleWithInfoProps {
    title: string;
    subtitle: string;
    decoration: string;
    textLeft: string;
    textRight: string;
    buttonText?: string;
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
                <Typography variant="h2">{title}</Typography>
                <Typography variant="decoration">{decoration}</Typography>
            </motion.div>
            <div className="col-span-12 lg:col-start-7 lg:col-span-6 grid gap-xsSpacing grid-cols-2">
                <motion.div
                    className="col-span-2 whitespace-pre-line"
                    variants={itemVariants}
                >
                    <Typography variant="h4">{subtitle}</Typography>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-2">
                    <Typography variant="body">{textLeft}</Typography>
                </motion.div>
                <motion.div variants={itemVariants} className="col-span-2">
                    <Typography variant="body">{textRight}</Typography>
                </motion.div>
                {buttonText && <motion.div variants={itemVariants} className="col-span-2">
                    <Button onClick={onButtonClick}>{buttonText}</Button>
                </motion.div>}
            </div>
        </motion.section>
    );
};

export default TitleWithInfo;
