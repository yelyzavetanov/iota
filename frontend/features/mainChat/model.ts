export type Message = {
    chatId: string;
    messageId: string;
    messageText: string;
    senderId: string;
    senderName: string;
    recipientId: string;
    recipientName: string;
    sendingTime: number;
    status: "pending" | "sent" | "viewed";
}