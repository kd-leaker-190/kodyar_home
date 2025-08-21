"use client";

import { me } from "@/actions/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IUser {
    id: number;
    name: string;
    email: string;
    cellphone: string;
    created_at: string;
}

interface IAuthContext {
    user: IUser | null;
    loginContext: (user: IUser) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const data = await me();

            if (data?.error) {
                setUser(null);
            } else {
                setUser(data?.user);
            }
        };

        checkUserLoggedIn();
    }, []);

    const loginContext = (user: IUser) => {
        setUser(user);
    };

    return (
        <>
            <AuthContext.Provider value={{ user, loginContext }}>{children}</AuthContext.Provider>
        </>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};

export default AuthContext;
