import type {Chat} from "../../model";

export type ChatsListProps = {
    chats: Chat[];
    filter: string;
}