import React from 'react';
import {MainProps} from "./types";


const Main = ({children}: MainProps) => {
    return (
        <div className="w-full max-h-[100vh] h-full">
            {children}
        </div>
    )
}

export default Main;