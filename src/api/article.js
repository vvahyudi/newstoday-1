import axios from "axios"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const getAllArticle = async (params) => {
	const { limit, page, sortBy, sortType } = params
	try {
		const response = await axios.get(
			`${BACKEND_URL}/article?limit=${limit}&page=${page}&sortBy=${sortBy}&sortType=${sortType}`,
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const getLatestArticle = async (params) => {
	const { limit } = params
	try {
		const response = await axios.get(
			`${BACKEND_URL}/article/latest?limit=${limit}`,
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const getArticleById = async (id) => {
	try {
		const response = await axios.get(`${BACKEND_URL}/article/${id}`, {})
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const createArticle = async (body) => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.post(`${BACKEND_URL}/article/`, body, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const updateArticle = async (payload) => {
	const token = localStorage.getItem("token")
	const { id, formData } = payload
	try {
		const response = await axios.put(`${BACKEND_URL}/article/${id}`, formData, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}
export const deleteArticle = async (id) => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.delete(`${BACKEND_URL}/article/${id}`, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const getArticleByUser = async () => {
	const token = localStorage.getItem("token")
	try {
		const response = await axios.get(`${BACKEND_URL}/article/me/list`, {
			headers: { authorization: `${token}` },
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}
