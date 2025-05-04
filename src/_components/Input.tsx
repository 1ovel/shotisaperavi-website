import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    return (
        <div>
            <label htmlFor={props.id} className="sr-only">
                {label}
            </label>
            <input
                {...props}
                className={`font-display bg-transparent appearance-none rounded-none relative block w-full px-3 py-2 border-b border-backgroundLight placeholder-foregroundGrey text-foregroundWhite focus:outline-none text-md focus:border-foregroundWhite ${className}`}
            />
            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
    );
};
