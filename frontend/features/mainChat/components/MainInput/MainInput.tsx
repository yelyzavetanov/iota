import React, {useState} from "react";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import Textarea from "@/shared/components/Textarea/Textarea";


const MainInput = () => {
    
    const [currentMessage, setCurrentMessage] = useState("");
    
    return (
        <div className="flex mx-[25%] p-4 pb-8 gap-4 justify-center items-end">
            <Textarea
                value={currentMessage}    
                onChange={event => setCurrentMessage(event.target.value)}
                maxRows={5} 
                className={"w-full max-w-[500px]"}
            />
            <Button 
                className={"w"} 
                variant={currentMessage.length ? "primary" : "disabled"}
            >
                SEND
            </Button>
        </div>
    )
}

export default MainInput;