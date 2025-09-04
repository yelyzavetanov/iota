import React from "react";
import {AuthorizationContainerProps} from "./types";


const AuthorizationContainer = ({children}: AuthorizationContainerProps) => {
    return (
        <div className={"w-full h-screen flex flex-col justify-center items-center"}>
            <div className={"border-accent min-h-50 min-w-100 flex flex-col"}>
                <div className={"px-2 py-1 border-bottom text-accent"}>iota</div>
                <div className={"p-10 flex gap-2 flex-col justify-center items-center flex-1"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthorizationContainer;