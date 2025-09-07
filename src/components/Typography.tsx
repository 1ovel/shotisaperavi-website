import React, { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/cn';

type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'caption'
    | 'button'
    | 'descriptor'
    | 'decoration';

interface TypographyProps {
    variant: TypographyVariant;
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

const variantStyles: Record<TypographyVariant, string> = {
    h1: 'font-heading text-[60px] sm:text-[80px] lg:text-[110px] xl:text-[130px] 2xl:text-[170px] uppercase leading-none',
    h2: 'font-heading text-[40px] leading-none uppercase',
    h3: 'font-heading text-[28px] sm:text-[32px] lg:text-[40px] leading-tight uppercase',
    h4: 'uppercase text-[20px] md:text-[24px]',
    body: 'text-lg text-foregroundGrey',
    caption: 'text-[14px] sm:text-[16px] text-foregroundGrey',
    button: 'uppercase text-lg',
    descriptor: 'text-foregroundWhite font-extralight text-2xl',
    decoration: 'font-decoration text-foregroundDark leading-none text-xl',
};

const defaultElements: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    caption: 'p',
    button: 'span',
    decoration: 'span',
    descriptor: 'p',
};

export const Typography = ({
    variant,
    children,
    className,
    as,
}: TypographyProps) => {
    const Component = as || defaultElements[variant];
    return (
        <Component className={cn(variantStyles[variant], className)}>
            {children}
        </Component>
    );
};
