import { NextRequest, NextResponse } from "next/server"

export function middleware(request) {
	const token = request.cookies.get("token")
	const path = request.nextUrl.pathname

	if (!token && path !== "/signin")
		return NextResponse.redirect(new URL("/signin", request.url))

	if (token && path === "/signin")
		return NextResponse.redirect(new URL("/", request.url))

	return NextResponse.next()
}

export const config = {
	matcher: ["/signin", "/profile/:path*"],
}
