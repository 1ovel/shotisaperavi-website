import React from 'react';

interface SpacerProps {
    size?: 'md' | 'lg';
}

const Spacer = ({ size = 'lg' }: SpacerProps) => {
    const styles = {
        md: 'h-mdSpacing',
        lg: 'h-lgSpacing',
    };
    return <div className={styles[size]} />;
};

export default Spacer;
