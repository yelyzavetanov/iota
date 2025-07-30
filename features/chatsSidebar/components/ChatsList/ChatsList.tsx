"use client"

import React from "react";
import {ChatsListProps} from "./types";
import ChatItem from "../СhatItem/ChatItem";


const ChatsList = ({chats, filter}: ChatsListProps) => {
    return (
        <div className={"flex flex-1 flex-col overflow-y-auto custom-scrollbar"}>
            {chats
                .filter(chat => chat.nickname.toLowerCase().includes(filter.toLowerCase()))
                .map((chat) => (
                <ChatItem
                    key={chat.id}
                    nickname={chat.nickname}
                    lastMessage={chat.lastMessage}
                    lastMessageTime={chat.lastMessageTime}
                    newMessages={chat.newMessages}
                />
            ))}
        </div>
    )
}

export default ChatsList;