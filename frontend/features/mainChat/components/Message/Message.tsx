import React from "react";
import {MessageProps} from "./types";


const Message = (
    {isCurrentUser, isPreviousSenderTheSame, messageInfo}: MessageProps
) => {

    const messageTime = new Date(messageInfo.sendingTime)
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={"flex"}>
            {isCurrentUser
                ? <div className={"p-2 ml-auto border-accent flex flex-col rounded-2xl"}>
                    <div className={"font-bold text-sm text-accent"}>{messageInfo.senderName}</div>
                    <div className={"my-1 text-accent"}>{messageInfo.messageText}</div>
                    <div className={"ml-auto text-sm"}>{messageTime}</div>
                </div>

                : <div className={"p-2 mr-auto border-regular flex flex-col rounded-2xl"}>
                    <div className={"font-bold"}>{messageInfo.senderName}</div>
                    <div className={"my-2"}>{messageInfo.messageText}</div>
                    <div className={"ml-auto"}>{messageTime}</div>
                </div>
            }
        </div>
    )
}

export default Message;