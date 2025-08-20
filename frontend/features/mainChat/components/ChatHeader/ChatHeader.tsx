import React from "react";
import ProfilePicture from "@/shared/components/ProfilePicture";
import {ChatHeaderProps} from "@/features/mainChat/components/ChatHeader/types";


const ChatHeader =  (
    {currentChatUserAvatar, currentChatUserName}: ChatHeaderProps
) => {
    return (
        <div className="py-2 px-4 border-accent flex justify-start gap-5 items-center box-border">
            <ProfilePicture src={currentChatUserAvatar}/>
            <span className={"text-accent"}>{currentChatUserName}</span>
        </div>
    )
}

export default ChatHeader;