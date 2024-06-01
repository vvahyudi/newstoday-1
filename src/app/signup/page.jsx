"use client"
import { nunitoBlack, nunitoBold, nunitoMedium } from "@/styles/font"
import Image from "next/image"

import { Icon } from "@iconify/react"
import Footer from "@/components/organisms/Footer"
import { useRouter } from "next/navigation"
// import { useSession } from "next-auth/react"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { signup } from "@/api/auth"
import Link from "next/link"
// import { register } from "@/services/user.service"

const SignUp = () => {
	const router = useRouter()
	// const session = useSession()
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
		phone: "",
	})
	const signupMutation = useMutation({
		mutationFn: signup,
	})
	const onChangeInput = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
	const handleRegister = async (e) => {
		e.preventDefault()
		try {
			signupMutation.mutate(form, {
				onSuccess: async (response) => {
					router.push("/signin")
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
						width={600}
						height={500}
						alt="Login Image"
					/>
				</div>
				<div className="flex flex-col p-20 gap-4 w-full md:w-1/2 ">
					<h1 className={`${nunitoBlack.className} text-3xl text-textprimary`}>
						Register
					</h1>
					<form
						action=""
						method="POST"
						className="gap-4 flex flex-col"
						onSubmit={handleRegister}
					>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className} text-textprimary`}>
								Username :
							</h3>
							<input
								name="username"
								onChange={onChangeInput}
								type="text"
								placeholder="Enter your email address"
								className="bg-white rounded-lg border border-1 border-bordergray text-sm text-textprimary md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className} text-textprimary`}>
								Email Address :
							</h3>
							<input
								name="email"
								onChange={onChangeInput}
								type="text"
								placeholder="Enter your email address"
								className="bg-white rounded-lg border border-1 border-bordergray text-sm text-textprimary md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className} text-textprimary`}>
								Password :
							</h3>
							<input
								name="password"
								onChange={onChangeInput}
								type="password"
								placeholder="Enter your password"
								className="bg-white rounded-lg border border-1 border-bordergray text-sm text-textprimary md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							<h3 className={`${nunitoBold.className} text-textprimary`}>
								Phone Number :{" "}
							</h3>
							<input
								name="phone"
								onChange={onChangeInput}
								type="text"
								placeholder="Enter your phone number"
								className="bg-white rounded-lg border border-1 border-bordergray text-sm text-textprimary md:text-base p-3"
							/>
						</div>
						<div className="flex-col flex gap-2">
							<button
								type="submit"
								className="btn bg-blueprimary text-white rounded-lg hover:bg-textprimary text-sm md:text-base p-3"
							>
								Register
							</button>
						</div>
						<div className="flex-col flex justify-center items-center">
							<h3 className="uppercase text-lg text-textprimary ">
								{" "}
								or sign up with
							</h3>
						</div>
						<div className="flex justify-center items-center gap-8">
							<Icon icon="devicon:google" className="w-8 h-8" />
							<Icon icon="logos:facebook" className="w-8 h-8" />
							<Icon icon="devicon:twitter" className="w-6 h-6" />
						</div>
						<div className="divider before:bg-bordergray after:bg-bordergray">
							<span className="text-textprimary">Already have an account?</span>
						</div>
						<Link href={`/signin`}>
							<div className="flex-col flex gap-2">
								<button
									type="submit"
									className="btn bg-textprimary text-white rounded-lg hover:bg-blueprimary text-sm md:text-base p-3"
								>
									Login Here
								</button>
							</div>
						</Link>
						<div className="flex-col flex justify-center items-center">
							<h3
								className={`${nunitoMedium.className} text-base text-blue-950`}
							>
								Back to Home Page
							</h3>
						</div>
					</form>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default SignUp
