import React from "react";
import {MessageProps} from "./types";


const Message = (
    {isCurrentUser, isPreviousSenderTheSame, isNextSenderTheSame, messageInfo}: MessageProps
) => {

    const messageTime = new Date(messageInfo.sendingTime)
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={"flex mx-[15%]"}>
            {isCurrentUser
                ? <div className={
                    `p-2 ml-auto border-accent flex flex-col rounded-2xl max-w-[500px]
                    ${!isNextSenderTheSame && "rounded-br-none"}`
                }>
                    <div className={"my-0.5 text-accent"}>{messageInfo.messageText}</div>
                    <div className={"ml-auto text-sm opacity-50 text-accent"}>{messageTime}</div>
                </div>

                : <div className={
                    `p-2 mr-auto border-regular flex flex-col rounded-2xl max-w-[500px]
                    ${!isPreviousSenderTheSame && "rounded-tl-none"}`
                }>
                    <div className={"font-bold text-accent"}>{messageInfo.senderName}</div>
                    <div className={"my-0.5"}>{messageInfo.messageText}</div>
                    <div className={"ml-auto text-sm opacity-50"}>{messageTime}</div>
                </div>
            }
        </div>
    )
}

export default Message;