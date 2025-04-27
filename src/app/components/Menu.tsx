import React from 'react';
import { MenuInfo } from '../types/MenuInfo';
import { Typography } from './Typography';
import { AnimatePresence, motion } from 'motion/react';
import { itemVariants } from '../constants/animations';

interface MenuProps {
    menu: MenuInfo;
}

const Menu = ({ menu }: MenuProps) => {
    return (
        <motion.div variants={itemVariants} className="flex flex-col gap-y-10">
            <AnimatePresence mode="wait">
                {menu.menuSections.map((section, index) => (
                    <motion.div key={section.title} variants={itemVariants}>
                        <div className="grid grid-cols-2 gap-y-5">
                            <div className="col-span-1">
                                <Typography variant="h2">
                                    {section.title}
                                </Typography>
                                <Typography variant="decoration">
                                    {section.decorator}
                                </Typography>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-10">
                                {section.menuItems.map((item) => (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        key={item.title}
                                        variants={itemVariants}
                                        className="w-full grid grid-cols-6"
                                    >
                                        <div className="col-span-5 flex flex-col gap-y-1">
                                            <Typography variant="h4">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body">
                                                {item.description}
                                            </Typography>
                                        </div>
                                        <div className="col-span-1 flex justify-end">
                                            <Typography variant="h4">
                                                {item.price + ' €'}
                                            </Typography>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        {index !== menu.menuSections.length - 1 && (
                            <div className="h-0 border-t border-backgroundLight w-full mt-10 bg-backgroundLight" />
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default Menu;
