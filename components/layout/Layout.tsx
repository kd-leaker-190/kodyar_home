import { ReactNode } from "react";
import NextProgressbar from "../lib/NextProgressbar";
import Toastify from "../lib/Toastify";
import Navbar from "./Navbar";
import { AuthProvider } from "@/context/AuthContext";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <Navbar />
            <main>{children}</main>
            <NextProgressbar />
            <Toastify />
        </AuthProvider>
    );
}
