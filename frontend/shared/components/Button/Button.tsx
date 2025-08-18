'use client';

import React from 'react';
import { ButtonProps } from './types';
import clsx from 'clsx';

const variantClasses = {
    primary: 'button',
    secondary: 'button-secondary',
};

const Button = ({children, variant = 'primary', className, ...props}: ButtonProps) => {
    return (
        <button
            className={clsx(variantClasses[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
