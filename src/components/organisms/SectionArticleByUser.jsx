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
	const { data, isLoading } = useArticleByUserQuery()
	const router = useRouter()

	const deleteArticleMutation = useMutation({
		mutationFn: deleteArticle,
	})

	const handleDeleteArticle = (id) => {
		try {
			deleteArticleMutation.mutate(id, {
				onSuccess: async (response) => {
					router.push("/profile")
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
		<section className="flex flex-col w-full p-10 gap-4">
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
						return (
							<CardArticle
								key={i}
								className={`carousel-item card w-full h-36 md:h-52 card-side shadow-md bg-bggray`}
								src={e.banner}
								alt={e.title}
								title={e.title.substr(0, 15)}
								description={e.title.substr(0, 90)}
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
										onClick={handleDeleteArticle(e.id)}
									>
										Delete
									</button>
								</div>
							</CardArticle>
						)
					})
				)}
			</div>
		</section>
	)
}

export default SectionArticleByUser
