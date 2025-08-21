import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const url = req.nextUrl.clone();

    const isAuthPage = url.pathname.startsWith("/auth/login") || url.pathname.startsWith("/auth/register");
    const isProfilePage = url.pathname.startsWith("/profile");

    if (!token && isProfilePage) {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
    }

    if (token && isAuthPage) {
        url.pathname = "/profile";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/auth/:path*"],
};
