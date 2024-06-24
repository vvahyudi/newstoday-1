import { nunitoBold, nunitoMedium } from "@/styles/font"
import { CardArticle } from "../molecules/CardArticle"
import { useArticleListQuery } from "@/hooks/useArticleQuery"
// import { useCategoryListQuery } from "@hooks/useCategoryQuery"
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
const SectionArticleByCategory = () => {
	const [params, setParams] = useState({
		limit: 10,
		page: 1,
		sortBy: "title",
		sortType: "DESC",
	})
	const { id } = useParams()
	const { data, isLoading } = useArticleListQuery(params)
	// const { category_list } = useCategoryListQuery(params)
	// console.log(category_list)
	// console.log(data)
	return (
		<section className="flex flex-col w-full p-10 gap-4">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-lg md:text-2xl`}>
					{isLoading
						? "Loading ..."
						: data &&
						  data.data &&
						  data.data.some((article) => article.category.id === id)
						? data.data.find((article) => article.category.id === id).category
								.title
						: null}
				</h2>
				{/* <h3
					className={`text-sm md:text-lg text-blueprimary ${nunitoMedium.className}`}
				>
					More
				</h3> */}
			</div>
			<div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					data.data.map((e, i) => {
						const titlePreview = e.title.split(" ").slice(0, 3).join(" ")
						const descriptionPreview = e.body.split(" ").slice(0, 10).join(" ")
						if (e.category.id === id) {
							return (
								<Link key={i} href={`/article/article-view/${e.id}`}>
									<CardArticle
										className={`carousel-item card w-full h-36 md:h-52 card-side shadow-md bg-bggray`}
										src={e.banner}
										alt={e.title}
										title={titlePreview}
										description={descriptionPreview}
										like={e.like}
										publishDate={`3m ago`}
									/>
								</Link>
							)
						}
					})
				)}
			</div>
		</section>
	)
}

export default SectionArticleByCategory
