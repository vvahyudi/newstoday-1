"use client"
import ArticleHeader from "@/components/molecules/ArticleHeader"
import CardImageArticle from "@/components/molecules/CardImageArticle"
import Image from "next/image"
import Navbar from "@/components/organisms/Navbar"
import React, { useEffect, useState } from "react"
import SectionAvatar from "@/components/organisms/SectionAvatar"
// import ArticleContent from "@/components/organisms/ArticleContent"
import SectionComment from "@/components/organisms/SectionComment"
import { nunitoBold } from "@/styles/font"
import Footer from "@/components/organisms/Footer"
import {
	useArticleListQuery,
	useArticleByIdQuery,
} from "@/hooks/useArticleQuery"
import { useParams } from "next/navigation"

export default function ArticleViewPage() {
	const { id } = useParams()
	const { data, isLoading } = useArticleByIdQuery(id)

	console.log(data)
	// console.log(article)
	return (
		<>
			{/* {JSON.stringify(data)} */}
			<Navbar />
			{isLoading ? (
				<div className="flex items-center w-full justify-center">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			) : (
				<section className="flex flex-col justify-center px-20 py-10 w-full">
					<ArticleHeader />
					<CardImageArticle>
						<Image
							src={`${data.data.banner}`}
							alt={`${data.data.title}`}
							// src={`/bg-hero-article.png`}
							// alt={"Image Article"}
							width={500}
							height={500}
							className="object-cover max-w-screen-sm"
						/>
						<Image
							src={`${data.data.banner}`}
							alt={`${data.data.title}`}
							// src={`/bg-hero-article.png`}
							// alt={"Image Article"}
							width={500}
							height={500}
							className="object-cover max-w-screen-sm"
						/>
					</CardImageArticle>
					<SectionAvatar
						picture={data.data.user.picture}
						username={data.data.user.username}
						job={data.data.user.job}
						created_at={data.data.createdAt}
					/>
					<section className="flex flex-col w-full gap-4">
						{/* {JSON.stringify(data)} */}
						<h1 className={`text-4xl ${nunitoBold.className}`}>
							{`${data.data.title}`}
							{/* {"Image Article"} */}
						</h1>
						<p className="prose prose-xl">
							{`${data.data.body}`}
							{/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Excepturi, dicta illo vel facere, autem nam soluta quod et
							deleniti quia eos, ullam tenetur voluptates repellendus quibusdam
							earum. Laboriosam, repellendus eveniet. Reiciendis sunt
							perspiciatis ipsum eius ab distinctio nihil omnis, odit, sequi
							rerum veritatis dignissimos, unde doloremque at? Est ullam,
							doloribus molestias id perferendis quia, voluptate pariatur
							commodi veritatis ea eligendi? */}
						</p>
					</section>
					<SectionComment />
				</section>
			)}

			<Footer />
		</>
	)
}

// export default ArticleViewPage
