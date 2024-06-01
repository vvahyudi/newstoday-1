import CardCategory from "../molecules/CardCategory"
import { nunitoBold, nunitoMedium } from "@/styles/font"
import { useCategoryListQuery } from "@/hooks/useCategoryQuery"
import { useState } from "react"
import Link from "next/link"

const SectionCategory = () => {
	const [params, setParams] = useState({
		limit: 10,
	})
	const { data, isLoading } = useCategoryListQuery(params)
	return (
		<section className="flex flex-col w-full p-10 gap-4">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-lg md:text-2xl`}>
					Category
				</h2>
				<h3
					className={`text-sm md:text-lg text-blueprimary ${nunitoMedium.className}`}
				>
					More
				</h3>
			</div>
			<div className="flex gap-2 md:gap-4 carousel carousel-center w-full no-scrollbar">
				{isLoading ? (
					<div className="flex items-center w-full justify-center">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				) : (
					data.data.map((e, i) => {
						return (
							<Link key={i} href={`/category`}>
								<CardCategory
									className={`flex carousel-item flex-col  w-full items-center`}
									src={e.banner}
									alt={e.title}
									label={e.title}
								/>
							</Link>
						)
					})
				)}
			</div>
		</section>
	)
}

export default SectionCategory
