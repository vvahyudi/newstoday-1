import { nunitoBold, nunitoMedium } from "@/styles/font"
import { CardArticle } from "../molecules/CardArticle"
import { useArticleListQuery } from "@/hooks/useArticleQuery"
// import { useCategoryListQuery } from "@hooks/useCategoryQuery"
import { useState } from "react"
import { useParams } from "next/navigation"
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
					{/* Sport */}
					{/* {if (data<0){

					}} */}
					{isLoading ? `Loading ...` : `${id}`}
				</h2>
				<h3
					className={`text-sm md:text-lg text-blueprimary ${nunitoMedium.className}`}
				>
					More
				</h3>
			</div>
			<div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
				{isLoading ? (
					<div>Loading ...</div>
				) : (
					data.data.map((e, i) => {
						if (e.category.id === id) {
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
								/>
							)
						}
					})
				)}
			</div>
		</section>
	)
}

export default SectionArticleByCategory