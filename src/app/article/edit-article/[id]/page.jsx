"use client"
import Navbar from "@/components/organisms/Navbar"
import React, { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import { nunitoBold, nunitoMedium } from "@/styles/font"
import Footer from "@/components/organisms/Footer"
import { useCategoryListQuery } from "@/hooks/useCategoryQuery"
import { useArticleByIdQuery } from "@/hooks/useArticleQuery"
import { useMutation } from "@tanstack/react-query"
import { updateArticle } from "@/api/article"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"

const EditArticlePage = () => {
	const router = useRouter()
	const { id } = useParams()
	const { data: articleDetail, isLoading: isLoadingArticle } =
		useArticleByIdQuery(id)
	// console.log(articleDetail)
	const [params, setParams] = useState({
		limit: 10,
	})

	const { data: categoryList, isLoading: isLoadingCategory } =
		useCategoryListQuery(params)
	const [form, setForm] = useState({
		title: "",
		categoryId: "",
		body: "",
		banner: null,
		tags: "",
	})
	useEffect(() => {
		if (articleDetail) {
			setForm({
				title: articleDetail.data.title,
				categoryId: articleDetail.data.categoryId,
				body: articleDetail.data.body,
				banner: articleDetail.data.banner,
				tags: articleDetail.data.tags,
			})
		}
	}, [articleDetail])
	const updateArticleMutation = useMutation({
		mutationFn: updateArticle,
	})
	const onChangeInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	const onChangeInputFile = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.files[0],
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append("title", form.title)
		formData.append("categoryId", form.categoryId)
		formData.append("body", form.body)
		formData.append("banner", form.banner)
		formData.append("tags", form.tags)
		const payload = { id: id, formData: formData }
		try {
			updateArticleMutation.mutate(payload, {
				onSuccess: async (response) => {
					router.push("/article")
				},
				onError: (error) => {
					console.error(error)
				},
			})
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<>
			<Navbar />
			<section className="flex flex-col justify-center p-10 gap-8 w-full">
				<div className="flex justify-between w-full">
					<div className="flex items-center justify-start">
						<Icon
							icon="ic:baseline-arrow-back-ios"
							className="text-textprimary w-6 h-6 font-bold"
						/>
						<h3
							className={`${nunitoMedium.className} text-textprimary text-lg`}
						>
							Back
						</h3>
					</div>
					<h2 className={`${nunitoBold.className} text-textprimary text-2xl`}>
						Write Article
					</h2>
					<h2 className={`${nunitoBold.className} text-textprimary text-lg`}>
						Save as draft
					</h2>
				</div>
				{isLoadingArticle ? (
					<div className="flex items-center w-full justify-center">
						<span className="loading loading-spinner loading-lg"></span>
					</div>
				) : (
					<form action="">
						<div className="flex w-full space-x-8">
							<div className="w-4/12 rounded-lg border border-1 border-bordergray py-10 px-6 flex flex-col items-center justify-center">
								<div className="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-borderygray rounded-xl">
									{form.banner ? (
										<Image
											src={form.banner} // Assuming `form.banner` has a `src` property
											width={100}
											height={100}
											alt={form.banner.alt || "Banner Image"} // Providing a default alt text if not available
											className="object-fit rounded-lg contrast-50 w-full h-full"
										/>
									) : (
										<Icon
											icon="mdi:add-bold"
											className="w-12 h-12 text-blueprimary"
										/>
									)}
								</div>
							</div>
							<div className="w-8/12">
								<div className="flex flex-col gap-4">
									<div className="flex items-center gap-2">
										<div className=" w-6/12">
											<input
												onChange={onChangeInput}
												value={`${form.title}`}
												name="title"
												type="text"
												placeholder="Article Title"
												className="input input-bordered input-md w-full"
											/>
										</div>
										<div className="w-6/12">
											{isLoadingCategory ? (
												<div className="flex items-center w-full justify-center">
													<span className="loading loading-spinner loading-lg"></span>
												</div>
											) : (
												<select
													className="select select-bordered  divide-y w-full"
													value={`${form.categoryId}`}
													name="categoryId"
													onChange={onChangeInput}
												>
													<option disabled value={`category`}>
														{" "}
														Article Category
													</option>
													{categoryList.data.map((category) => (
														<option key={category.id} value={category.id}>
															{category.title}
														</option>
													))}
												</select>
											)}
										</div>
									</div>
									<div className="w-full flex flex-col gap-4 border border-1 border-bordergray rounded-lg p-10">
										<div className="flex gap-4">
											<span
												className={`${nunitoBold.className} text-blueprimary text-xl`}
											>
												Attachment
											</span>
											<Icon
												icon="carbon:image"
												className="w-6 h-6 text-blueprimary"
											/>
											<Icon
												icon="carbon:play-outline"
												className="w-6 h-6 text-blueprimary"
											/>
											<Icon
												icon="carbon:list"
												className="w-6 h-6 text-blueprimary"
											/>
											<Icon
												icon="carbon:link"
												className="w-6 h-6 text-blueprimary"
											/>
											<Icon
												icon="carbon:text-scale"
												className="w-6 h-6 text-blueprimary"
											/>
										</div>
										<div className="flex w-full">
											<textarea
												onChange={onChangeInput}
												value={`${form.body}`}
												name="body"
												placeholder="Your content is here"
												className="textarea textarea-bordered textarea-lg w-full h-96"
											></textarea>
										</div>
										<div className="flex w-full">
											<input
												value={`${form.tags}`}
												onChange={onChangeInput}
												type="text"
												name="tags"
												placeholder="Tags"
												className="input input-bordered input-md w-full"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex w-full pt-4 items-center">
							<div className="w-4/12">
								<label
									htmlFor="banner"
									className="btn btn-lg normal-case w-full bg-textprimary rounded-lg hover:bg-blueprimary text-white"
								>
									Choose Cover Photo
								</label>
								<input
									onChange={onChangeInputFile}
									type="file"
									name="banner"
									id="banner"
									className="hidden file-input file-input-bordered w-full max-w-xs"
								/>
							</div>
							<div className="w-8/12">
								<button
									onClick={handleSubmit}
									type="submit"
									className="btn w-full bg-blueprimary hover:bg-textprimary normal-case text-white btn-lg"
								>
									Request Publish Article
								</button>
							</div>
						</div>
					</form>
				)}
			</section>
			<Footer />
		</>
	)
}

export default EditArticlePage
