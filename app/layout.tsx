import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const vazirMatn = Vazirmatn({
    variable: "--font-vazir",
    subsets: ["arabic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Kod Yar | صفحه اصلی",
    description: "صفحه اصلی کد یار",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl">
            <body className={`${vazirMatn.className}`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
