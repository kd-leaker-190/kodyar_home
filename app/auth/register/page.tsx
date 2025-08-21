import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">ثبت نام</h2>

                <RegisterForm />

                <div className="flex items-center justify-center space-x-3 space-x-reverse">
                    <span className="text-gray-400">یا ورود با</span>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                    <Link
                        href="/auth/google"
                        className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition w-full"
                    >
                        <FaGoogle className="ml-2 text-red-500" />
                        گوگل
                    </Link>

                    <Link
                        href="/auth/google"
                        className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition w-full"
                    >
                        <FaGithub className="ml-2" />
                        گیت‌هاب
                    </Link>
                </div>

                <p className="text-center text-gray-500 text-sm">
                    حساب کاربری دارید؟{" "}
                    <Link href="/auth/login" className="text-indigo-600 hover:underline">
                        ورود
                    </Link>
                </p>
            </div>
        </div>
    );
}
