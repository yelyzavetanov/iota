import {Message} from "../../model";


export type MessageProps = {
    isCurrentUser: boolean;
    isPreviousSenderTheSame: boolean;
    messageInfo: Message;
}