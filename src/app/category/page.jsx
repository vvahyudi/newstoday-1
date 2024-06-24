"use client"
import Hero from "@/components/organisms/Hero"
import Navbar from "@/components/organisms/Navbar"
import React, { useState } from "react"
import FilterButton from "@/components/molecules/FilterButton"
import SectionCategory1 from "@/components/organisms/SectionCategory1"
import { nunitoBold } from "@/styles/font"
import Footer from "@/components/organisms/Footer"
import { useCategoryListQuery } from "@/hooks/useCategoryQuery"

const CategoryPage = () => {
	const [params, setParams] = useState({
		limit: 10,
	})
	const { data, isLoading } = useCategoryListQuery(params)
	console.log(data)
	return (
		<>
			<Navbar />
			<Hero
				className={`relative h-[615px]`}
				src={`/bg-hero-category.png`}
				title={`Choose Article by Category`}
				description={`Category helps you to read another article that you haven’t thought before. You able to read all articles for free. Enjoy the reading!`}
			/>
			<div className="flex w-full items-center px-10 justify-between">
				<FilterButton />
				{isLoading ? (
					<div className="flex items-center w-full justify-center">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				) : (
					<h3
						className={`text-lg md:text-xl text-textgray ${nunitoBold.className}`}
					>
						{data.data.length > 0 ? data.data.length : 0}&nbsp;Categories
					</h3>
				)}
			</div>
			<SectionCategory1
			// textClick={`Click the category to explore articles`}
			/>
			<Footer />
		</>
	)
}

export default CategoryPage
