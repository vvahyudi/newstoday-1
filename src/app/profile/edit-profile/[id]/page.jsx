"use client"
import CardProfileInfo from "@/components/molecules/CardProfileInfo"
import Navbar from "@/components/organisms/Navbar"
import {
	nunitoBlack,
	nunitoBase,
	nunitoBold,
	nunitoMedium,
} from "@/styles/font"
import Image from "next/image"
import React from "react"
import { Icon } from "@iconify/react"
import { useDetailProfileQuery } from "@/hooks/useProfileQuery"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Footer from "@/components/organisms/Footer"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { updateProfile, updateProfilePicture } from "@/api/profile"

const EditProfilePage = () => {
	const { data, isLoading } = useDetailProfileQuery()
	const { id } = useParams()
	const router = useRouter()
	const [form, setForm] = useState({
		username: "",
		email: "",
		phone: "",
		picture: null,
		job: "",
		about: "",
	})
	const profileUpdateMutation = useMutation({
		mutationFn: updateProfile,
	})
	const profileUpdatePictureMutation = useMutation({
		mutationFn: updateProfilePicture,
	})
	const onChangeInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const onChangeInputFile = (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append("picture", file)
		profileUpdatePictureMutation.mutate(formData, {
			onSuccess: async (response) => {
				router.push("/profile")
			},
			onError: (error) => {
				console.error(error)
			},
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		try {
			profileUpdateMutation.mutate(form, {
				onSuccess: async (response) => {
					router.push("/profile")
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
			<div className="w-full flex flex-col lg:flex-row  p-10 ">
				<aside className="w-1/4 hidden lg:block  mx-10">
					<h1 className={`${nunitoBlack.className} text-2xl`}>Profile</h1>
					{/* start CardProfile Component */}
					<div className="flex justify-center">
						{isLoading ? (
							<div className="flex items-center w-full justify-center">
								<span className="loading loading-spinner loading-lg"></span>
							</div>
						) : (
							<CardProfileInfo
								src={
									data.data.picture === ""
										? `/avatar-placeholder.png`
										: data.data.picture
								}
								username={data.data.username}
								about={
									data.data.about === ""
										? `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `
										: data.data.about
								}
							/>
						)}
					</div>
					{/* end CardProfile Component */}
					<div className="flex flex-col pt-20 gap-4">
						<div className="flex justify-between px-10 bg-indigo-100 py-4">
							<h3
								className={`${nunitoBold.className} text-blueprimary text-lg`}
							>
								Edit Profile
							</h3>
							<Icon
								className="w-6 h-6 text-blueprimary"
								icon="ep:arrow-right-bold"
							/>
						</div>
						<div className="flex justify-between px-10  py-4">
							<h3 className={`${nunitoBold.className} text-gray-700 text-lg`}>
								Saved Post
							</h3>
							<Icon
								className="w-6 h-6 text-gray-700"
								icon="ep:arrow-right-bold"
							/>
						</div>
						<div className="flex justify-between px-10  py-4">
							<h3 className={`${nunitoBold.className} text-gray-700 text-lg`}>
								FAQ
							</h3>
							<Icon
								className="w-6 h-6 text-gray-700"
								icon="ep:arrow-right-bold"
							/>
						</div>
						<div className="flex justify-between px-10  py-4">
							<h3 className={`${nunitoBold.className} text-gray-700 text-lg`}>
								Help
							</h3>
							<Icon
								className="w-6 h-6 text-gray-700"
								icon="ep:arrow-right-bold"
							/>
						</div>
						<div className="flex justify-between px-10  py-4">
							<h3 className={`${nunitoBold.className} text-gray-700 text-lg`}>
								Logout
							</h3>
							<Icon
								className="w-6 h-6 text-gray-700"
								icon="ep:arrow-right-bold"
							/>
						</div>
					</div>
				</aside>
				<div className="w-full md:w-3/4 flex flex-col gap-3 border-l-2 border-bggray">
					<form action="" onSubmit={handleSubmit}>
						{isLoading ? (
							<div className="flex items-center w-full justify-center">
								<span className="loading loading-spinner loading-lg"></span>
							</div>
						) : (
							<>
								<div className="grid grid-cols-1 py-4 justify-items-center lg:grid-cols-3">
									<div></div>
									<div className="flex flex-col items-center gap-4">
										<div className="avatar">
											<div className="w-20 rounded ring  ring-blueprimary ring-offset-8">
												<Image
													src={data.data.picture}
													height={100}
													width={100}
													alt={data.data.username}
												/>
											</div>
										</div>
										<div className="flex w-full items-center justify-center">
											<label
												htmlFor="picture"
												className={`text-gray-500 ${nunitoBold.className}`}
											>
												Choose Profile Picture
											</label>
											<input
												onChange={onChangeInputFile}
												type="file"
												name="picture"
												id="picture"
												className="hidden file-input file-input-bordered w-full max-w-xs"
											/>
										</div>
									</div>
									<div className="flex flex-col justify-start">
										<button
											className={`${nunitoBold.className} text-blueprimary`}
										>
											Save Changes
										</button>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
									<div className="flex flex-col items-start justify-start gap-4">
										<span>Username</span>
										<input
											onChange={onChangeInput}
											name="username"
											id="username"
											type="text"
											placeholder="johndoe"
											className="input input-bordered w-full max-w-xs"
											defaultValue={data.data.username}
										/>
									</div>
									<div className="flex flex-col items-start gap-4 justify-start">
										<span>Email</span>
										<input
											onChange={onChangeInput}
											type="email"
											name="email"
											id="email"
											placeholder="John Doe"
											className="input input-bordered w-full max-w-xs"
											defaultValue={data.data.email}
										/>
									</div>

									<div className="flex flex-col items-start gap-4">
										<span>Phone</span>
										<input
											onChange={onChangeInput}
											type="text"
											name="phone"
											id="phone"
											placeholder="johndoe@mail.com"
											className="input input-bordered w-full max-w-xs"
											defaultValue={data.data.phone}
										/>
									</div>
									{/* <div className="flex flex-col items-start gap-4">
								<span>Password</span>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className="input input-bordered w-full max-w-xs"
								/>
							</div> */}

									<div className="flex flex-col items-start gap-4">
										<span>Job</span>
										<input
											onChange={onChangeInput}
											type="text"
											name="job"
											id="job"
											placeholder="Job"
											className="input input-bordered w-full max-w-xs"
											defaultValue={data.data.job}
										/>
									</div>
									<div className="flex flex-col items-start gap-4">
										<span>About</span>

										<textarea
											onChange={onChangeInput}
											name="about"
											id="about"
											className="textarea textarea-bordered textarea-lg w-full max-w-xs"
											placeholder="Lorem ipsum dolor sit amet"
											defaultValue={data.data.about}
										></textarea>
									</div>
								</div>
							</>
						)}
					</form>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default EditProfilePage
