import {TextareaHTMLAttributes} from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLInputElement> {
    maxRows: number;
}