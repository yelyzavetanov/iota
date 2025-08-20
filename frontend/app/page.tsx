'use client';

import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Sidebar from "@/shared/components/Sidebar";
import ChatsSidebar from "@/features/chatsSidebar/components/ChatsSidebar/ChatsSidebar";


export default function Home() {
    return (
        <div className="flex items-stretch justify-between w-full h-screen gap-2 box-border">
            <Sidebar>
                <ChatsSidebar/>
            </Sidebar>
            <main>
                <Button
                    className={"m-5"}
                    onClick={() => alert("button")}
                >
                    button
                </Button>
                <Input placeholder={"hehe hehe"} onChange={(e) => alert(e.target.value)} />
                <p>this is p</p>
                <a>this is a</a>

                <p className={"text-accent"}>hehe test text yyyyy</p>
            </main>
        </div>
    );
}
