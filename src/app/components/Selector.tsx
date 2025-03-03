import React, { Fragment } from 'react';
import { SelectorItem } from '../types/SelectorItem';

interface SelectorProps {
    items: SelectorItem[];
    selectedItemTitle: string;
    size?: 'md' | 'lg';
}

const Selector = ({ size = 'md', items, selectedItemTitle }: SelectorProps) => {
    const styles = {
        md: 'text-lg',
        lg: 'text-[24px]',
    };
    return (
        <div className={'flex gap-xsSpacing ' + styles[size]}>
            {items.map((item, index) => {
                const isLast = index + 1 === items.length;
                const isSelected = item.title === selectedItemTitle;
                return (
                    <Fragment
                        key={'selector-button-' + item.title + '-' + index}
                    >
                        <button
                            onClick={item.onClick}
                            className={
                                isSelected
                                    ? 'text-foregroundWhite uppercase'
                                    : 'text-foregroundGrey uppercase hover:text-foregroundWhite transition-all'
                            }
                        >
                            {item.title}
                        </button>
                        {!isLast && (
                            <span className="text-foregroundGrey">/</span>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Selector;
