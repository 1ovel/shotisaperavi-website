'use client';

import Image from 'next/image';
import React from 'react';
import imageBread from '../images/photo-bread.webp';
import imageFood from '../images/photo-food.webp';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';
import { Typography } from '../components/Typography';

const Hero = () => {
    return (
        <motion.section
            className="grid lg:gap-xsSpacing grid-cols-12 grid-rows-4 w-full relative flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <Typography
                    variant="decoration"
                    className="absolute top-0 left-0"
                >
                    ღვინო
                </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Typography
                    variant="decoration"
                    className="absolute bottom-0 left-0 lg:left-auto lg:right-0"
                >
                    საკვები
                </Typography>
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="hidden lg:block col-span-2 col-start-4 row-start-3 row-span-2"
            >
                <Image
                    src={imageFood}
                    alt=""
                    className="object-cover w-full h-full brightness-[0.8]"
                />
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="col-span-6 col-start-7 lg:col-span-4 lg:col-start-6 row-start-1 row-span-4"
            >
                <Image
                    src={imageBread}
                    alt=""
                    className="object-cover w-full h-full brightness-[0.8]"
                />
            </motion.div>

            <div className="grid leading-none gap-x-xsSpacing grid-cols-12 grid-rows-[90px-90px-90px] sx:grid-rows-[140px_140px_140px] w-full absolute top-1/2 -translate-y-1/2">
                <motion.div variants={itemVariants} className="lg:col-start-3">
                    <Typography variant="h1">Authentic</Typography>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="lg:col-start-7 row-start-2 row-auto"
                >
                    <Typography variant="h1">Georgian</Typography>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="lg:col-start-5 row-start-3"
                >
                    <Typography variant="h1">Tastes</Typography>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
