"use client"
import ArticleHeader from "@/components/molecules/ArticleHeader"
import CardImageArticle from "@/components/molecules/CardImageArticle"
import Image from "next/image"
import Navbar from "@/components/organisms/Navbar"
import { Icon } from "@iconify/react"

import SectionAvatar from "@/components/organisms/SectionAvatar"
// import ArticleContent from "@/components/organisms/ArticleContent"
import SectionComment from "@/components/organisms/SectionComment"
import { nunitoBold } from "@/styles/font"
import Footer from "@/components/organisms/Footer"
import { useArticleByIdQuery } from "@/hooks/useArticleQuery"
import { useDetailProfileQuery } from "@/hooks/useProfileQuery"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { createComment } from "@/api/article"

export default function ArticleViewPage() {
	const { id } = useParams()
	const { data, isLoading, refetch } = useArticleByIdQuery(id)
	const { data: userDetail, isLoading: isLoadingUserDetail } =
		useDetailProfileQuery()

	const [form, setForm] = useState({
		comment: "",
	})
	const [token, setToken] = useState(null)
	useEffect(() => {
		const getToken = localStorage.getItem("token")
		setToken(getToken)
	}, [])
	const createCommentMutation = useMutation({
		mutationFn: createComment,
	})
	const onChangeInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	// console.log(form)
	const handleSubmitComment = (e) => {
		e.preventDefault()
		const body = { comment: form.comment }
		const payload = { id: id, body: body }

		console.log(body)
		try {
			createCommentMutation.mutate(payload, {
				onSuccess: async (response) => {
					refetch()
					// console.error(response)
				},
				onError: (error) => {
					console.error(error)
				},
			})
		} catch (error) {
			console.error(error)
		}
	}
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
				<section className="flex flex-col justify-center p-8 w-full">
					<ArticleHeader
						sendIcon={
							<Icon icon="bi:send" className="text-black w-6 h-6 font-bold" />
						}
					/>
					<CardImageArticle>
						<Image
							src={`${data.data.banner}`}
							alt={`${data.data.title}`}
							// src={`/bg-hero-article.png`}
							// alt={"Image Article"}
							width={480}
							height={480}
							className="object-cover max-w-96 md:max-w-screen-sm"
						/>
						{/* <Image
							src={`${data.data.banner}`}
							alt={`${data.data.title}`}
							// src={`/bg-hero-article.png`}
							// alt={"Image Article"}
							width={500}
							height={500}
							className="object-cover max-w-screen-sm"
						/> */}
					</CardImageArticle>
					<SectionAvatar
						picture={data.data.user.picture}
						username={data.data.user.username}
						job={data.data.user.job}
						created_at={data.data.createdAt}
					/>
					<section className="flex flex-col w-full gap-4">
						{/* {JSON.stringify(data)} */}
						<h1 className={`text-xl md:text-4xl ${nunitoBold.className}`}>
							{`${data.data.title}`}
							{/* {"Image Article"} */}
						</h1>
						<p className="prose prose-xl text-sm md:text-lg">{`${data.data.body}`}</p>
					</section>
					{token ? (
						<section className="flex flex-col w-full gap-2 pt-8">
							<h2 className={`text-2xl ${nunitoBold.className}`}>
								{data.data.comment.length} Comments
							</h2>
							<div className="flex justify-start space-x-2">
								{isLoadingUserDetail ? (
									<div className="flex items-center w-full justify-center">
										<span className="loading loading-spinner loading-lg"></span>
									</div>
								) : (
									<div className="avatar">
										<div className="rounded-xl w-14 h-14">
											<Image
												src={userDetail.data.picture}
												alt={`Avatar`}
												width={100}
												height={100}
												className="object-cover"
											/>
										</div>
									</div>
								)}
								<form action="">
									<div className="flex flex-col justify-center gap-2 w-full">
										<h4
											className={`text-blue-950 ${nunitoBold.className} text-lg`}
										>
											You
										</h4>

										<textarea
											onChange={onChangeInput}
											className="textarea textarea-bordered max-w-screen-md"
											placeholder="Leave a comment"
											name="comment"
										></textarea>
										<div className="flex items-start">
											<button
												type="submit"
												onClick={handleSubmitComment}
												className={`btn-sm btn bg-blue-600 normal-case border-0 text-base text-center text-white`}
											>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</section>
					) : null}

					{data.data.comment.map((comment) => (
						<SectionComment
							key={comment.id}
							articleOwnerAvatar={data.data.user.picture}
							articleOwnerName={data.data.user.username}
							commentatorAvatar={comment.user.picture}
							commentatorName={comment.user.username}
							commentatorDate={comment.createdAt}
							commentContent={comment.comment}
						/>
					))}
				</section>
			)}

			<Footer />
		</>
	)
}

// export default ArticleViewPage
