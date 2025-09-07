import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
    isMobile: boolean;
}

const MOBILE_BREAKPOINT = 1024;

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        isMobile:
            typeof window !== 'undefined'
                ? window.innerWidth <= MOBILE_BREAKPOINT
                : false,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth <= MOBILE_BREAKPOINT,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
