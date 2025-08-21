import { ReactNode } from "react";
import NextProgressbar from "../lib/NextProgressbar";
import Toastify from "../lib/Toastify";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <NextProgressbar />
            <Toastify />
        </>
    );
}
