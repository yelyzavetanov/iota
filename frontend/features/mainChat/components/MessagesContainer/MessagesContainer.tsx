import React from 'react';
import {MessagesContainerProps} from "./types";
import Message from "../Message/Message";


const MessagesContainer = (
    {messages, currentUserId}: MessagesContainerProps
) => {
    return (
        <div className="flex flex-col gap-2 p-4 overflow-auto h-full custom-scrollbar box-border">
            {messages.map((message, index) => (
                <Message
                    key={message.messageId}
                    isCurrentUser={message.senderId === currentUserId}
                    isPreviousSenderTheSame={messages[index-1]?.senderId === message.senderId || false}
                    messageInfo={message}
                />
            ))}
        </div>
    )
}

export default MessagesContainer;