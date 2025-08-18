'use client'

import React from 'react';
import { InputProps } from "./types";

const Input = ({className, ...props}: InputProps) => {
    return <input className={className} {...props}/>;
}

export default Input;