"use client"
import React from "react"
import { useParams } from "next/navigation"
import { useArticleByCategoryQuery } from "@/hooks/useCategoryQuery"
import Navbar from "@/components/organisms/Navbar"
import ArticleHeader from "@/components/molecules/ArticleHeader"
import Footer from "@/components/organisms/Footer"
import SectionArticleByCategory from "@/components/organisms/SectionArticleByCategory"

const CategoryIdPage = () => {
	const { id } = useParams()
	const { data, isLoading } = useArticleByCategoryQuery(id)
	console.log(data)
	return (
		<>
			<Navbar />
			<ArticleHeader page_name={`Category`} />
			{isLoading ? (
				<div className="flex items-center w-full justify-center">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			) : (
				<SectionArticleByCategory />
			)}
			<Footer />
		</>
	)
}

export default CategoryIdPage
