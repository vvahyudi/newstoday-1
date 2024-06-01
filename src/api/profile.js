import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const getDetailProfile = async () => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.get(`${BACKEND_URL}/auth/me`, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const updateProfile = async (body) => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.put(`${BACKEND_URL}/auth/update`, body, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}
export const updateProfilePicture = async (body) => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.put(
			`${BACKEND_URL}/auth/update/picture`,
			body,
			{
				headers: {
					authorization: `${token}`,
				},
			},
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
