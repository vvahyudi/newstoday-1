import React from "react"
import CardCategory1 from "../molecules/CardCategory1"
import { nunitoBold } from "@/styles/font"
import { useCategoryListQuery } from "@/hooks/useCategoryQuery"
import { useState } from "react"
import Link from "next/link"
const SectionCategory1 = ({ moreCategory }) => {
	const [params, setParams] = useState({
		limit: 10,
	})
	const { data, isLoading } = useCategoryListQuery(params)
	return (
		<section className="flex flex-col w-full p-10">
			<div className="flex p-10 w-full  items-center justify-center">
				<h3 className={`text-xl p-4 text-textgray ${nunitoBold.className}`}>
					{moreCategory}
				</h3>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 md:gap-8 gap-4 place-items-center w-full">
				{isLoading ? (
					<div className="flex items-center w-full justify-center">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				) : (
					data.data.map((e, i) => {
						const totalArticles = e.article ? e.article.length : 0
						return (
							<Link key={i} href={`/category/${e.id}`}>
								<CardCategory1
									src={e.banner}
									alt={e.title}
									label={e.title}
									totalArticle={totalArticles}
								/>
							</Link>
						)
					})
				)}
			</div>
			<div className="flex px-10 py-10 w-full  items-center justify-center">
				<h3 className={`text-xl p-4 text-textgray ${nunitoBold.className}`}>
					We have no category left
				</h3>
			</div>
		</section>
	)
}

export default SectionCategory1
