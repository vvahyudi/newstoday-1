import { nunitoBold, nunitoMedium } from "@/styles/font"
import { CardArticle } from "../molecules/CardArticle"
import { useLatestArticleQuery } from "@/hooks/useArticleQuery"
import { useState } from "react"
const SectionLatest = () => {
	const [params, setParams] = useState({
		limit: 10,
	})
	const { data, isLoading } = useLatestArticleQuery(params)
	// console.log(data)
	return (
		<section className="flex flex-col w-full p-10 gap-4">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-lg md:text-2xl`}>
					Latest
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
						return (
							<CardArticle
								key={i}
								className={`carousel-item card w-full h-36 md:h-52 card-side shadow-md bg-bggray`}
								src={e.banner}
								title={e.title.substr(0, 15)}
								description={e.title.substr(0, 90)}
								like={e.like}
								publishDate={`3m ago`}
							/>
						)
					})
				)}
			</div>
		</section>
	)
}

export default SectionLatest
