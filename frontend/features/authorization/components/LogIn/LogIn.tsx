import React from "react";
import AuthorizationContainer from "../AuthorizationContainer/AuthorizationContainer";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {LogInInputs} from "./types";


const LogIn = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<LogInInputs>();

    const onSubmit: SubmitHandler<LogInInputs> = (data) => {
        console.log("log in data: ", data);
    }

    const areFieldsFull = watch("nickname") && watch("password");

    return (
        <AuthorizationContainer>
            <div className={"mb-4"}>Log in</div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={"flex flex-col gap-4"}
            >
                <Input
                    placeholder={"Your nickname..."}
                    {...register("nickname", {required: "Enter your nickname."})}
                />
                <Input
                    placeholder={"Your password..."}
                    type="password"
                    {...register("password", {required: "Enter your password."})}
                />
            </form>

            <div className={"mt-4"}>
                <Button
                    type="submit"
                    variant={areFieldsFull ? "primary" : "disabled"}
                >
                    GO!
                </Button>
            </div>
        </AuthorizationContainer>
    )
}

export default LogIn;