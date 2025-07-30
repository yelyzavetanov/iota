"use client"

import React from "react";
import ChatsList from "../ChatsList/ChatsList";
import {mockChats, mockFolders} from "../../mocks";
import ChatsSearch from "../ChatsSearch/ChatsSearch";
import MenuButton from "@/features/chatsSidebar/components/MenuButton/MenuButton";
import ChatsFoldersMenu from "@/features/chatsSidebar/components/ChatsFoldersMenu/ChatsFoldersMenu";


const ChatsSidebar = () => {

    const [filter, setFilter] = React.useState("");
    const [selectedFolder, setSelectedFolder] = React.useState("All");

    return (
        <div className={"flex flex-col h-screen"}>
            <div className={"flex p-2 gap-2"}>
                <MenuButton/>
                <ChatsSearch filter={filter} setFilter={setFilter}/>
            </div>
            <ChatsFoldersMenu
                selectedFolder={selectedFolder}
                setSelectedFolder={setSelectedFolder}
                folders={mockFolders}
            />
            <ChatsList chats={mockChats} filter={filter}/>
        </div>
    )
}

export default ChatsSidebar;