'use client';

import Sidebar from "@/shared/components/Sidebar";
import {ChatsSidebar} from "@/features/chatsSidebar";
import {MainChat} from "@/features/mainChat";
import Main from "@/shared/components/Main";


export default function Home() {
    return (
        <div className="flex items-stretch justify-between w-full h-screen box-border">
            <Sidebar>
                <ChatsSidebar/>
            </Sidebar>
            <Main>
                <MainChat/>
            </Main>
        </div>
    );
}
