import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    fullWidth = true,
    className = '',
    id,
    ...props
}) => {
    const inputId = id || props.name || Math.random().toString(36).substr(2, 9);
    const widthClass = fullWidth ? 'w-full' : '';
    const errorClass = error
        ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
        : 'border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-primary-500 focus:border-primary-500';

    return (
        <div className={`${widthClass} mb-4`}>
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative rounded-md shadow-sm">
                <input
                    id={inputId}
                    className={`
            block w-full rounded-lg border px-3 py-2 shadow-sm outline-none transition-all duration-200
            ${errorClass}
            ${className}
          `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
