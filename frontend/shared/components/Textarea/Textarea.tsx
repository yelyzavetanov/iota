import React, {useEffect, useRef} from 'react';
import {TextareaProps} from './types';


const Textarea = ({ className = "", maxRows, ...props }: TextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resize: React.FormEventHandler<HTMLTextAreaElement> = () => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto";

            let newHeight = el.scrollHeight;
            if (maxRows) {
                const lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
                const maxHeight = lineHeight * maxRows;
                newHeight = Math.min(newHeight, maxHeight);
                el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
            } else {
                el.style.overflowY = "hidden";
            }

            el.style.height = newHeight + "px";
        }
    };

    useEffect(() => {
        resize({} as any);
    }, []);

    return (
        <textarea
            ref={textareaRef}
            rows={1}
            className={`resize-none overflow-hidden custom-scrollbar ${className}`}
            onInput={resize}
            {...props}
        />
    );
};

export default Textarea;