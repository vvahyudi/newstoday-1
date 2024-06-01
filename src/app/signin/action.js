"use server"

import { cookies } from "next/headers"
export async function getToken() {
	return cookies().get("token").value
}
export async function updateToken(token) {
	cookies().set("token", token)
}
export async function deleteToken() {
	cookies().delete("token")
}
