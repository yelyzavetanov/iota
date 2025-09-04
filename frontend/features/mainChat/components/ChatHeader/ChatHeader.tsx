import React from "react";
import ProfilePicture from "@/shared/components/ProfilePicture";
import {ChatHeaderProps} from "@/features/mainChat/components/ChatHeader/types";


const ChatHeader =  (
    {currentChatUserAvatar, currentChatUserName, currentUserOnline}: ChatHeaderProps
) => {
    return (
        <div className="py-2 px-4 border-accent flex justify-start gap-5 items-center box-border">
            <ProfilePicture src={currentChatUserAvatar}/>
            <div>
                <div className={"text-accent"}>{currentChatUserName}</div>
                <div className={"text-accent text-sm opacity-50"}>{currentUserOnline}</div>
            </div>
        </div>
    )
}

export default ChatHeader;