"use client"
import { useState } from "react"
import { nunitoBlack, nunitoBold, nunitoMedium } from "@/styles/font"
import Image from "next/image"
import { Icon } from "@iconify/react"
import Footer from "@/components/organisms/Footer"
import { signin } from "@/api/auth"
import { updateToken } from "./action"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
const SignIn = () => {
	const router = useRouter()
	const [form, setForm] = useState({
		email: "",
		password: "",
	})
	const loginMutation = useMutation({
		mutationFn: signin,
	})
	// const onChangeInput = (e) => {
	// 	setForm({
	// 		...form,
	// 		[e.target.name]: e.target.value,
	// 	})
	// }
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			loginMutation.mutate(form, {
				onSuccess: async (response) => {
					const token = response.token
					localStorage.setItem("token", token)
					await updateToken(token)
					router.push("/")
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
			<section className="flex flex-col md:flex-row">
				<div className="flex w-full md:w-1/2 ">
					<Image
						src="/loginImage.png"
						width={1000}
						height={1000}
						alt="Login Image"
					/>
				</div>
				<div className="flex flex-col p-24 gap-4 w-full md:w-1/2">
					<h1 className={`${nunitoBlack.className} text-3xl`}>Login</h1>
					<form
						action=""
						method="POST"
						className="gap-4 flex flex-col"
						onSubmit={handleSubmit}
					>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className}`}>Email Address :</h3>
							<input
								type="email"
								name="email"
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								placeholder="Enter your email address"
								className="bg-white rounded-lg border border-1 border-bordergray text-xs md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className}`}>Password :</h3>
							<input
								type="password"
								name="password"
								onChange={(e) => setForm({ ...form, password: e.target.value })}
								placeholder="Enter your password"
								className="bg-white rounded-lg border border-1 border-bordergray text-xs md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							{loginMutation.isPending ? (
								<div className="flex items-center w-full justify-center">
									<span className="loading loading-spinner loading-lg"></span>
								</div>
							) : (
								<button
									type="submit"
									className="btn bg-blueprimary text-white rounded-lg hover:bg-blue-900 text-xs md:text-base p-3"
								>
									Login
								</button>
							)}
						</div>
					</form>
					<div className="flex-col flex justify-center items-center">
						<h3 className="uppercase text-lg text-blue-900">
							{" "}
							or sign up with
						</h3>
					</div>
					<div className="flex justify-center items-center gap-8">
						<Icon icon="devicon:google" className="w-8 h-8" />
						<Icon icon="logos:facebook" className="w-8 h-8" />
						<Icon icon="devicon:twitter" className="w-6 h-6" />
					</div>
					<div className="divider before:bg-blue-200 after:bg-blue-200">
						<span className="text-blue-900">Don&apos;t have an account?</span>
					</div>
					<Link href={`/signup`}>
						<div className="flex-col flex gap-2">
							<button className="btn bg-blue-950 text-white rounded-lg hover:bg-blue-900 text-xs md:text-base p-3">
								Sign Up Now
							</button>
						</div>
					</Link>
					<div className="flex-col flex justify-center items-center">
						<h3
							className={`${nunitoMedium.className} text-base underline text-blue-950`}
						>
							Back to Home Page
						</h3>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default SignIn
