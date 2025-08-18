export type Chat = {
    id: string;
    nickname: string;
    lastMessage: string;
    profilePicture?: string | undefined;
    lastMessageTime: string;
    newMessages: number;
}