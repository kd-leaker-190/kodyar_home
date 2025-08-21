import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">ورود</h2>

                <LoginForm />

                <p className="text-center text-gray-500 text-sm">
                    حساب کاربری ندارید؟{" "}
                    <Link href="/auth/register" className="text-indigo-600 hover:underline">
                        ایجاد حساب کاربری
                    </Link>
                </p>
            </div>
        </div>
    );
}
