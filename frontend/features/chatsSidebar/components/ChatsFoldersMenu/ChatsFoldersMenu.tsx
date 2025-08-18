"use client"

import React from "react";
import {ChatsFolderMenuProps} from "./types";
import ChatsFolder from "@/features/chatsSidebar/components/ChatsFolder/ChatsFolder";


const ChatsFoldersMenu = (props: ChatsFolderMenuProps) => {

    return (
        <div className={"flex justify-start items-center gap-2"}>
            {props.folders.map(folder => (
                <ChatsFolder
                    isSelected={props.selectedFolder === folder}
                    setSelectedFolder={props.setSelectedFolder}
                    folderName={folder}
                    key={folder}/>
            ))}
        </div>
    )
}

export default ChatsFoldersMenu;