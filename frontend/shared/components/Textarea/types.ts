import {TextareaHTMLAttributes} from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxRows?: number;
}