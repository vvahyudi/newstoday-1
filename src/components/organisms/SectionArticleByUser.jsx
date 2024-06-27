import { nunitoBold, nunitoMedium } from "@/styles/font"
import { CardArticle } from "../molecules/CardArticle"
import { useArticleByUserQuery } from "@/hooks/useArticleQuery"
import Link from "next/link"
import { deleteArticle } from "@/api/article"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { useCategoryListQuery } from "@hooks/useCategoryQuery"

const SectionArticleByUser = () => {
	const { data, isLoading, refetch } = useArticleByUserQuery()
	const router = useRouter()

	const deleteArticleMutation = useMutation({
		mutationFn: deleteArticle,
	})

	const handleDeleteArticle = (id) => {
		try {
			deleteArticleMutation.mutate(id, {
				onSuccess: async (response) => {
					// router.push("/profile")
					refetch()
				},
				onError: (error) => {
					console.error(error)
				},
			})
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<section className="flex flex-col w-full p-8 gap-4">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-lg md:text-2xl`}>
					My Article
				</h2>
			</div>
			<div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					data.data.map((e, i) => {
						const titlePreview = e.title.split(" ").slice(0, 3).join(" ")
						const descriptionPreview = e.body.split(" ").slice(0, 10).join(" ")
						return (
							<Link key={i} href={`/article/article-view/${e.id}`}>
								<CardArticle
									className={`carousel-item card w-full h-44 md:h-52 card-side shadow-md bg-bggray`}
									src={e.banner}
									alt={e.title}
									title={titlePreview}
									description={descriptionPreview}
									like={e.like}
									publishDate={`3m ago`}
								>
									<div className="flex w-full justify-between mt-0 -mb-0 md:-mb-6  md:mt-2 text-white">
										<Link
											className="btn btn-sm bg-green-500 hover:bg-green-700"
											href={`article/edit-article/${e.id}`}
										>
											Edit
										</Link>

										<button
											className="btn btn-sm bg-red-500 hover:bg-red-700"
											onClick={() => handleDeleteArticle(e.id)}
										>
											Delete
										</button>
									</div>
								</CardArticle>
							</Link>
						)
					})
				)}
			</div>
		</section>
	)
}

export default SectionArticleByUser
