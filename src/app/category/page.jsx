"use client"
import Hero from "@/components/organisms/Hero"
import Navbar from "@/components/organisms/Navbar"
import React from "react"
import FilterButton from "@/components/molecules/FilterButton"
import SectionCategory1 from "@/components/organisms/SectionCategory1"
import { nunitoBold } from "@/styles/font"
import Footer from "@/components/organisms/Footer"

const CategoryPage = () => {
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
				<h3
					className={`text-lg md:text-xl text-textgray ${nunitoBold.className}`}
				>
					18 Categories
				</h3>
			</div>
			<SectionCategory1 />
			<Footer />
		</>
	)
}

export default CategoryPage
