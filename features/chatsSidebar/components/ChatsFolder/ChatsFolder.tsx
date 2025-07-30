"use client"

import React from "react";
import {ChatsFolderProps} from "./types";


const ChatsFolder = ({folderName, isSelected, setSelectedFolder}: ChatsFolderProps) => {

    const selectedFolderStyle = "text-accent border-bottom";

    return (
        <div
            className={`flex justify-between items-center border-b-transparent border-b-1 p-2 duration-100
                hover:text-accent hover:border-bottom
                ${isSelected && selectedFolderStyle}
            `}
            onClick={() => setSelectedFolder(folderName)}
        >
            {folderName}
        </div>
    )
}

export default ChatsFolder;