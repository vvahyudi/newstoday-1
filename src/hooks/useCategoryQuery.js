import { getAllCategory, getArticleByCategory } from "@/api/category"
import { useQuery } from "@tanstack/react-query"

export const useCategoryListQuery = (params) => {
	return useQuery({
		queryKey: ["category-list"],
		queryFn: async () => getAllCategory(params),
	})
}
export const useArticleByCategoryQuery = (params) => {
	return useQuery({
		queryKey: ["category-detail"],
		queryFn: async () => await getArticleByCategory(params),
	})
}
