import {
	getAllArticle,
	getArticleById,
	getArticleByUser,
	getLatestArticle,
} from "@/api/article"
import { useQuery } from "@tanstack/react-query"

export const useArticleListQuery = (params) => {
	return useQuery({
		queryKey: ["article-list"],
		queryFn: async () => await getAllArticle(params),
	})
}

export const useArticleByIdQuery = (id) => {
	return useQuery({
		queryKey: ["article-detail"],
		queryFn: async () => await getArticleById(id),
	})
}

export const useArticleByUserQuery = () => {
	return useQuery({
		queryKey: ["my-article"],
		queryFn: async () => await getArticleByUser(),
	})
}

export const useLatestArticleQuery = (params) => {
	return useQuery({
		queryKey: ["latest-article"],
		queryFn: async () => await getLatestArticle(params),
	})
}
