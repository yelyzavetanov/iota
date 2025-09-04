import React from "react";
import AuthorizationContainer from "../AuthorizationContainer/AuthorizationContainer";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "./types";


const SignUp = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("sign up data: ", data);
    }

    const areFieldsFull = watch("nickname") && watch("password") && watch("passwordRepeat");

    return (
        <AuthorizationContainer>
            <div className={"mb-4"}>Create your account!</div>

            <form
                className={"flex flex-col gap-2 max-w-[300px]"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    placeholder={`Your nickname...`}
                    {...register("nickname", {
                        required: "Nickname is required",
                        minLength: {value: 3, message: "Minimum 3 characters"}
                    })}
                />
                {errors.nickname &&
                    <span className={"opacity-50 text-accent"}>{errors.nickname.message}</span>
                }

                <Input
                    className={"mt-4"}
                    type={"password"}
                    placeholder={`Repeat your password...`}
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                    })}
                />
                {errors.password &&
                    <span className={"opacity-50 text-accent"}>{errors.password.message}</span>
                }

                <Input
                    type={"password"}
                    placeholder={`Your password...`}
                    {...register("passwordRepeat", {
                        required: "Please repeat your password",
                        validate: (value) => value === watch("password") || "Passwords do not match"
                    })}
                />
                {errors.passwordRepeat &&
                    <span className={"opacity-50 text-accent"}>{errors.passwordRepeat.message}</span>
                }

                <div className={"flex justify-center"}>
                    <Button
                        type={"submit"}
                        className={"mt-4 min-w-[100px]"}
                        variant={areFieldsFull ? "primary" : "disabled"}
                    >
                        GO!
                    </Button>
                </div>
            </form>
        </AuthorizationContainer>
    )
}

export default SignUp;