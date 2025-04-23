import React from 'react';
import logoImage from '../images/logo.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="flex items-center justify-between border-t border-backgroundLight py-mdSpacing">
            <Image src={logoImage} alt="Shoti & Saperavi logo" width={150} />
            <p className="text-foregroundGrey">© Shoti & Saperavi 2025 </p>
        </div>
    );
};

export default Footer;
