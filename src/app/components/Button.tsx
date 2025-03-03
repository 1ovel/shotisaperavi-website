import Image from 'next/image';
import React from 'react';
import arrowIcon from '../images/arrow.svg';

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button
            className="uppercase text-lg flex items-center gap-4 hover:gap-6 transition-all"
            onClick={onClick}
        >
            {title}
            <Image src={arrowIcon} alt="arrow right" />
        </button>
    );
};

export default Button;
