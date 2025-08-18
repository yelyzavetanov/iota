"use client"

import React from "react";
import { ChatItemProps } from "./types";
import ProfilePicture from "@/shared/components/ProfilePicture";
import trimText from "@/shared/utils/trimText";

const ChatItem = ({ profilePicture, nickname, lastMessage, ...props }: ChatItemProps) => {
    return (
        <div className="flex items-center gap-3 px-5 py-2 box-border w-full group transition-colors cursor-pointer rounded-md">
            <ProfilePicture src={profilePicture} />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <span className="font-bold group-hover:text-accent transition-colors">
                        {trimText(nickname, 20)}
                    </span>
                    <span className="opacity-50">{props.lastMessageTime}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="opacity-50">{trimText(lastMessage, 20)}</span>
                    {props.newMessages > 0 && (
                        <span className="text-accent text-shadow">{props.newMessages}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
