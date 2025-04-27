import React from 'react';
import { cn } from '../utils/cn';

interface SpacerProps {
    size?: 'md' | 'lg';
}

const Spacer = ({ size = 'lg' }: SpacerProps) => {
    const styles = {
        md: 'h-mdSpacing',
        lg: 'max-h-lgSpacing h-[15vh]',
    };
    return <div className={cn(styles[size], 'shrink-0')} />;
};

export default Spacer;
