"use client";

import { login } from "@/actions/auth";
import Input from "./Input";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "nextjs-toploader/app";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoginForm() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(login, {
        status: "",
        message: "",
    });

    useEffect(() => {
        if (state.status) {
            toast(state.message, { type: `${state?.status as "success" | "error"}` });
        }

        if (state.status === "success") {
            router.push("/");
        }
    }, [state]);

    return (
        <form action={formAction} className="flex flex-col space-y-4">
            <div className="flex flex-col">
                <Input label="ایمیل" name="email" type="email" dir="ltr" />
            </div>

            <div className="flex flex-col">
                <Input label="رمز عبور" name="password" type="password" dir="ltr" />
            </div>

            <button
                type="submit"
                disabled={pending}
                className="bg-indigo-600 w-full rounded-md text-white py-2 font-medium hover:bg-indigo-700 transition disabled:bg-indigo-300 flex items-center justify-center"
            >
                {pending ? (
                    <>
                        <span className="ml-2">در حال ارسال</span>
                        <AiOutlineLoading3Quarters className="animate-spin" />
                    </>
                ) : (
                    <>
                        <span className="ml-2">ورود</span>
                    </>
                )}
            </button>
        </form>
    );
}
