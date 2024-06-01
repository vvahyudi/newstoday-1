import { getAllArticle, getArticleById } from "@/api/article"
import { useQuery } from "@tanstack/react-query"

export const useArticleListQuery = (params) => {
	return useQuery({
		queryKey: ["article-list"],
		queryFn: async () => await getAllArticle(params),
	})
}

export const useArticleByIdQuery = (params) => {
	return useQuery({
		queryKey: ["article-detail"],
		queryFn: async () => await getArticleById(params),
	})
}
