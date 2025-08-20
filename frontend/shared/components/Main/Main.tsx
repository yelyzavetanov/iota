import React from 'react';
import {MainProps} from "./types";


const Main = ({children}: MainProps) => {
    return (
        <div className="w-full max-h-[100vh]">
            {children}
        </div>
    )
}

export default Main;