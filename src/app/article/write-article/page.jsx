"use client"
import Navbar from "@/components/organisms/Navbar"
import React, { useState } from "react"
import { Icon } from "@iconify/react"
import { nunitoBlack, nunitoBold, nunitoMedium } from "@/styles/font"
import Footer from "@/components/organisms/Footer"
import { useCategoryListQuery } from "@/hooks/useCategoryQuery"
import { useMutation } from "@tanstack/react-query"
import { createArticle } from "@/api/article"
import { useRouter } from "next/navigation"
// import Tiptap from "@/components/organisms/Tiptap"
// import { getSession } from "next-auth/react"
// import { createArticle } from "@/services/article.service"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"

const WriteArticlePage = () => {
	const router = useRouter()
	const [params, setParams] = useState({
		limit: 10,
	})
	const { data, isLoading } = useCategoryListQuery(params)
	const [form, setForm] = useState({
		title: "",
		categoryId: "",
		body: "",
		banner: null,
		tags: "",
	})
	const createArticleMutation = useMutation({
		mutationFn: createArticle,
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

		try {
			createArticleMutation.mutate(formData, {
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
				<form action="">
					<div className="flex w-full space-x-8">
						<div className="w-4/12 rounded-lg border border-1 border-bordergray py-10 px-6 flex flex-col items-center justify-center">
							<div className="flex flex-col items-center justify-center w-full h-full border-dashed border-2 border-borderygray rounded-xl">
								<Icon
									icon="mdi:add-bold"
									className="w-12 h-12 text-blueprimary"
								/>
							</div>
						</div>
						<div className="w-8/12">
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<div className=" w-6/12">
										<input
											onChange={onChangeInput}
											name="title"
											type="text"
											placeholder="Article Title"
											className="input input-bordered input-md w-full"
										/>
									</div>
									<div className="w-6/12">
										{isLoading ? (
											<div className="flex items-center w-full justify-center">
												<span className="loading loading-spinner loading-lg"></span>
											</div>
										) : (
											<select
												className="select select-bordered  divide-y w-full"
												defaultValue={`category`}
												name="categoryId"
												onChange={onChangeInput}
											>
												<option disabled value={`category`}>
													{" "}
													Article Category
												</option>
												{data.data.map((category) => (
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
											name="body"
											placeholder="Your content is here"
											className="textarea textarea-bordered textarea-lg w-full h-96"
										></textarea>
									</div>
									<div className="flex w-full">
										<input
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
			</section>
			<Footer />
		</>
	)
}

export default WriteArticlePage
