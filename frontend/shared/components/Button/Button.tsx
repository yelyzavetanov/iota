'use client';

import React from 'react';
import { ButtonProps } from './types';
import clsx from 'clsx';

const variantClasses = {
    primary: 'button',
    secondary: 'button-secondary',
    disabled: 'button-disabled',
};

const Button = ({children, variant = 'secondary', className, ...props}: ButtonProps) => {
    
    return (
        <button
            className={clsx(variantClasses[variant], className)}
            {...props}
            disabled={variant === "disabled"}
        >
            {children}
        </button>
    );
};

export default Button;
