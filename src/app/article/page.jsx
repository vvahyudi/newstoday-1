"use client"
import CategoryArticle from "@/components/organisms/CategoryArticle"
import FilterButton from "@/components/molecules/FilterButton"
import Footer from "@/components/organisms/Footer"
import Hero from "@/components/organisms/Hero"
import Navbar from "@/components/organisms/Navbar"
import CategoryGovernment from "@/components/organisms/CategoryGovernment"
import CategoryTodays from "@/components/organisms/CategoryTodays"
import CategorySports from "@/components/organisms/CategorySports"
import CategoryPolitics from "@/components/organisms/CategoryPolitics"
import { CardArticle } from "@/components/molecules/CardArticle"
import { useArticleListQuery } from "@/hooks/useArticleQuery"
import { useState } from "react"
import Link from "next/link"
// import { getAllArticle } from "@/services/article.service"
// import { getSession } from "next-auth/react"

// aturan getSession
// 1. hanya bisa dipakai di dalam getServerSideProps
// 2. hanya bisa digunakan di SSR

// export const getServerSideProps = async (context) => {
// 	const session = await getSession(context)
// 	console.log(session)
// 	const [error, result] = await getAllArticle({ session })
// 	return { props: { data: { result, error } } }
// }
const ArticlePage = () => {
	const [params, setParams] = useState({
		limit: 10,
		page: 1,
		sortBy: "title",
		sortType: "DESC",
	})
	const { data, isLoading } = useArticleListQuery(params)
	return (
		<>
			<Navbar />
			<Hero
				className={`relative h-[615px]`}
				src={`/bg-hero-article.png`}
				title={`Start Writing an Article`}
				description={`You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.`}
			>
				<button className="btn btn-lg bg-blueprimary hover:bg-blueprimary/80 text-white text-2xl w-64 normal-case">
					Start Writing
				</button>
			</Hero>
			<FilterButton />
			{/* {JSON.stringify(data)} */}
			<CategoryArticle>
				<CategoryGovernment>
					{isLoading ? (
						<div className="flex items-center w-full justify-center">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					) : (
						data.data.map((e, i) => {
							if (e.category.title === "Government") {
								return (
									<Link key={i} href={`/article/article-view/${e.id}`}>
										<CardArticle
											className={`carousel-item card w-96 h-44 md:h-52 card-side shadow-md bg-bggray`}
											src={e.banner}
											title={e.title.substr(0, 15)}
											description={e.title.substr(0, 90)}
											like={e.like}
											publishDate={`3m ago`}
										/>
									</Link>
								)
							}
						})
					)}
				</CategoryGovernment>
				<CategoryTodays>
					{isLoading ? (
						<div className="flex items-center w-full justify-center">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					) : (
						data.data.map((e, i) => {
							if (e.category.title === "Todays") {
								return (
									<Link key={i} href={`/article/article-view/${e.id}`}>
										<CardArticle
											className={`carousel-item card w-96 h-44 md:h-52 card-side shadow-md bg-bggray`}
											src={e.banner}
											title={e.title.substr(0, 15)}
											description={e.title.substr(0, 90)}
											like={e.like}
											publishDate={`3m ago`}
										/>
									</Link>
								)
							}
						})
					)}
				</CategoryTodays>
				<CategorySports>
					{isLoading ? (
						<div className="flex items-center w-full justify-center">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					) : (
						data.data.map((e, i) => {
							if (e.category.title === "Sport") {
								return (
									<Link key={i} href={`/article/article-view/${e.id}`}>
										<CardArticle
											className={`carousel-item card w-96 h-44 md:h-52 card-side shadow-md bg-bggray`}
											src={e.banner}
											title={e.title.substr(0, 15)}
											description={e.title.substr(0, 90)}
											like={e.like}
											publishDate={`3m ago`}
										/>
									</Link>
								)
							}
						})
					)}
				</CategorySports>

				<CategoryPolitics>
					{isLoading ? (
						<div className="flex items-center w-full justify-center">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					) : (
						data.data.map((e, i) => {
							if (e.category.title === "Politics") {
								return (
									<Link key={i} href={`/article/article-view/${e.id}`}>
										<CardArticle
											className={`carousel-item card w-96 h-44 md:h-52 card-side shadow-md bg-bggray`}
											src={e.banner}
											title={e.title.substr(0, 15)}
											description={e.title.substr(0, 90)}
											like={e.like}
											publishDate={`3m ago`}
										/>
									</Link>
								)
							}
						})
					)}
				</CategoryPolitics>
			</CategoryArticle>
			<Footer />
		</>
	)
}

export default ArticlePage
