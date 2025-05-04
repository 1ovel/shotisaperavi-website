import React, { Fragment } from 'react';
import { SelectorItem } from '@/app/types/SelectorItem';
import { Typography } from './Typography';

interface SelectorProps {
    items: SelectorItem[];
    selectedItemId: string;
    size?: 'md' | 'lg';
}

const Selector = ({ size = 'md', items, selectedItemId }: SelectorProps) => {
    const styles = {
        md: 'text-lg',
        lg: 'text-[24px]',
    };
    return (
        <div
            className={'flex flex-wrap gap-x-xsSpacing gap-y-2' + styles[size]}
        >
            {items.map((item, index) => {
                const isLast = index + 1 === items.length;
                const isSelected = item.id === selectedItemId;
                return (
                    <Fragment key={'selector-button-' + item.id + '-' + index}>
                        <button
                            onClick={item.onClick}
                            className={
                                isSelected
                                    ? 'text-foregroundWhite'
                                    : 'text-foregroundGrey hover:text-foregroundWhite transition-all'
                            }
                        >
                            <Typography variant="button">
                                {item.title}
                            </Typography>
                        </button>
                        {!isLast && (
                            <Typography
                                variant="button"
                                className="text-foregroundGrey"
                            >
                                /
                            </Typography>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Selector;
