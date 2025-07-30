'use client'

import React from "react";
import { SidebarProps } from './types';

const Sidebar = ({children}: SidebarProps) => {
    return (
        <div className={"border-regular box-border h-full md:w-1/4 max-w-[400px] w-full flex flex-col items-stretch justify-start"}>
            {children}
        </div>
    )
}

export default Sidebar;

