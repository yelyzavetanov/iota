import React from "react";

export type ChatsSearchProps = {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}