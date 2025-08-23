import React from 'react';
import ChatHeader from "../ChatHeader/ChatHeader";
import {mockMessages} from "../../mocks";
import MessagesContainer from "../MessagesContainer/MessagesContainer";
import MainInput from "@/features/mainChat/components/MainInput/MainInput";


const MainChat = () => {

    const currentUserId = "u1";

    return (
        <div className="h-full flex flex-col box-border">
            <ChatHeader currentChatUserName={"My friend"} currentUserOnline={"Online!"}/>
            <MessagesContainer messages={mockMessages} currentUserId={currentUserId}/>
            <MainInput/>
        </div>
    )
}

export default MainChat;