import React from 'react';
import ChatHeader from "../ChatHeader/ChatHeader";
import {mockMessages} from "../../mocks";
import MessagesContainer from "../MessagesContainer/MessagesContainer";


const MainChat = () => {

    const currentUserId = "u1";

    return (
        <div className="h-full flex flex-col box-border">
            <ChatHeader currentChatUserName={"My friend"}/>
            <MessagesContainer messages={mockMessages} currentUserId={currentUserId}/>
        </div>
    )
}

export default MainChat;