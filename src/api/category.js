import axios from "axios"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const getAllCategory = async (params) => {
	const { limit } = params
	try {
		const response = await axios.get(
			`${BACKEND_URL}/category?limit=${limit}`,
			{},
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const getArticleByCategory = async (id) => {
	try {
		const response = await axios.get(`${BACKEND_URL}/article/category/${id}`)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
