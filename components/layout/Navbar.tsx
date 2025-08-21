"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className="top-0 z-50 flex items-center justify-between px-5 h-16 bg-white text-black shadow-md relative">
                {/* لوگو */}
                <div className="flex items-center z-50">
                    <h1 className="font-bold text-2xl hover:text-indigo-600 transition">
                        <Link href="/">کدیار {"</>"}</Link>
                    </h1>
                </div>

                {/* منوی دسکتاپ وسط */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
                    <Link href="/" className="hover:text-indigo-600 transition hover:underline">
                        صفحه اصلی
                    </Link>
                    <Link href="/about-us" className="hover:text-indigo-600 transition hover:underline">
                        درباره ما
                    </Link>
                    <Link href="/contact-us" className="hover:text-indigo-600 transition hover:underline">
                        تماس با ما
                    </Link>
                    <Link href="/services" className="hover:text-indigo-600 transition hover:underline">
                        خدمات
                    </Link>
                </div>

                {/* دکمه‌های ورود/ثبت نام */}
                <div className="hidden md:flex space-x-2 z-50">
                    <Link
                        href="/auth/register"
                        className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-5 py-1 rounded-md"
                    >
                        ثبت نام
                    </Link>

                    <Link
                        href="/auth/login"
                        className="bg-white border border-indigo-600 hover:bg-indigo-600 hover:text-white transition text-black px-5 py-1 rounded-md"
                    >
                        ورود
                    </Link>
                </div>

                {/* دکمه موبایل */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="flex items-center justify-center h-10 w-10">
                        {isMenuOpen ? (
                            <FiX size={26} className="text-black" />
                        ) : (
                            <FiMenu size={26} className="text-black" />
                        )}
                    </button>
                </div>
            </nav>

            {/* منوی موبایل */}
            <div
                className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg border-l border-gray-200 p-5 mt-5 pt-16 transition-transform duration-300 ease-in-out md:hidden z-40 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="space-y-5 text-black">
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href="/about-us">درباره ما</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">تماس با ما</Link>
                    </li>
                    <li>
                        <Link href="/services">خدمات</Link>
                    </li>
                    <li>
                        <Link href="/auth/register" className="hover:text-indigo-600 transition">
                            ثبت نام
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/login" className="hover:text-indigo-600 transition">
                            ورود
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
