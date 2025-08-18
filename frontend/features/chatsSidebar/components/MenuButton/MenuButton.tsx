"use client";

import React from "react";
import Button from "@/shared/components/Button";

const MenuButton = () => {
    return (
        <Button className={"group"} variant="secondary">
            <svg
                className="w-6 h-6 text-[#ededed] group-hover:text-[#fcba03] transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <g strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="2.25"/>
                    <circle cx="4" cy="12" r="2.25"/>
                    <circle cx="20" cy="12" r="2.25"/>
                </g>
            </svg>
        </Button>
    );
};

export default MenuButton;
