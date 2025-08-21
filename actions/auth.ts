"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helpers";
import { cookies } from "next/headers";

export const register = async (state: any, formData: FormData) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (username === "" || email === "" || password === "") {
        return {
            status: "error",
            message: "لطفا از پر بودن تمامی موارد فرم ثبت نام اطمینان حاصل فرمایید.",
        };
    }

    const data = await postFetch("/auth/register", {
        username,
        email,
        password,
    });

    if (data.status === "success") {
        (await cookies()).set({
            name: "token",
            value: data.data.token,
            httpOnly: true,
            path: "/",
            domain: "localhost",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
        });

        return {
            status: data.status,
            message: data.message,
        };
    } else {
        return {
            status: data.status,
            message: handleError(data.message),
        };
    }
};
