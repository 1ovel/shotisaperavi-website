'use client';

import Image from 'next/image';
import React from 'react';
import imageBread from '../images/photo-bread.webp';
import imageFood from '../images/photo-food.webp';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../constants/animations';

const Hero = () => {
    return (
        <motion.section
            className="grid lg:gap-xsSpacing grid-cols-12 grid-rows-4 w-full relative flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.span
                variants={itemVariants}
                className="font-decoration text-foregroundDark absolute top-0 left-0 text-xl"
            >
                ღვინო
            </motion.span>
            <motion.span
                variants={itemVariants}
                className="font-decoration text-foregroundDark absolute bottom-0 left-0 lg:left-auto lg:right-0 text-xl"
            >
                საკვები
            </motion.span>
            <motion.div
                variants={itemVariants}
                className="hidden lg:block col-span-2 col-start-4 row-start-3 row-span-2"
            >
                <Image
                    src={imageFood}
                    alt=""
                    className="object-cover w-full h-full brightness-[0.6]"
                />
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="col-span-6 col-start-7 lg:col-span-4 lg:col-start-6 row-start-1 row-span-4"
            >
                <Image
                    src={imageBread}
                    alt=""
                    className="object-cover w-full h-full brightness-[0.6]"
                />
            </motion.div>

            <div className="grid leading-none gap-x-xsSpacing grid-cols-12 grid-rows-[90px-90px-90px] sx:grid-rows-[140px_140px_140px] w-full font-heading text-[6rem] sx:text-[110px] xl:text-[140px] 2xl:text-[170px] uppercase absolute top-1/2 -translate-y-1/2">
                <motion.h1 variants={itemVariants} className="lg:col-start-3">
                    Authentic
                </motion.h1>
                <motion.h1
                    variants={itemVariants}
                    className="lg:col-start-7 row-start-2 row-auto"
                >
                    Georgian
                </motion.h1>
                <motion.h1
                    variants={itemVariants}
                    className="lg:col-start-5 row-start-3"
                >
                    Tastes
                </motion.h1>
            </div>
        </motion.section>
    );
};

export default Hero;
