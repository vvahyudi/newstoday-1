import { nunitoBold, nunitoMedium } from "@/styles/font"
import { CardArticle } from "../molecules/CardArticle"
import { useArticleListQuery } from "@/hooks/useArticleQuery"
import { useState } from "react"
import Link from "next/link"

const SectionRecommended = () => {
	const [params, setParams] = useState({
		limit: 10,
		page: 1,
		sortBy: "title",
		sortType: "DESC",
	})
	const { data, isLoading } = useArticleListQuery(params)
	return (
		<section className="flex flex-col w-full p-8 gap-4">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-lg md:text-2xl`}>
					Recommended
				</h2>
				<h3
					className={`text-sm md:text-lg text-blueprimary ${nunitoMedium.className}`}
				>
					More
				</h3>
			</div>
			{/* {JSON.stringify(data)} */}
			<div className="gap-8 carousel no-scrollbar p-3">
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					data.data.map((e, i) => {
						const titlePreview = e.title.split(" ").slice(0, 3).join(" ")
						const descriptionPreview = e.body.split(" ").slice(0, 10).join(" ")

						// if (e.category.title === "Sport") {
						return (
							<Link key={i} href={`/article/article-view/${e.id}`}>
								<CardArticle
									className={`carousel-item card w-full h-44 md:h-52 card-side shadow-md bg-bggray`}
									src={e.banner}
									title={titlePreview}
									description={descriptionPreview}
									like={e.like}
									publishDate={`3m ago`}
								/>
							</Link>
						)
						// }
					})
				)}
			</div>
		</section>
	)
}

export default SectionRecommended
