import React from 'react';
import logoImage from '@/images/logo.svg';
import Image from 'next/image';
import { Typography } from './Typography';

const Footer = () => {
    return (
        <div className="flex items-center justify-between border-t border-backgroundLight py-mdSpacing">
            <Image src={logoImage} alt="Shoti & Saperavi logo" width={150} />
            <Typography variant="caption">© Shoti & Saperavi 2025 </Typography>
        </div>
    );
};

export default Footer;
