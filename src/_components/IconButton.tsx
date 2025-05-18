'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
    onClick: () => void;
    icon: LucideIcon;
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon: Icon,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full hover:bg-gray-100/10 transition-colors ${className}`}
            type="button"
        >
            <Icon size={24} />
        </button>
    );
};
