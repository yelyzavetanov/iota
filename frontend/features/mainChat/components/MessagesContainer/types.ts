import {Message} from "../../model";

export type MessagesContainerProps = {
    messages: Message[];
    currentUserId: string;
}