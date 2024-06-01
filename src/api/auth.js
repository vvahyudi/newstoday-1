import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const signin = async (body) => {
	try {
		const response = await axios.post(`${BACKEND_URL}/auth/login`, body)
		console.log(response)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
export const signup = async (body) => {
	try {
		const response = await axios.post(`${BACKEND_URL}/auth/register`, body)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
