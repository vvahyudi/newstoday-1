"use client"
import { nunitoBlack, nunitoBold, nunitoMedium } from "@/styles/font"
import Image from "next/image"
import React from "react"
import { Icon } from "@iconify/react"
import Footer from "@/components/organisms/Footer"
const ForgotPassword = () => {
	return (
		<>
			<section className="flex flex-col lg:flex-row">
				<div className="flex w-full lg:w-1/2 ">
					<Image
						src="/forgotImage.png"
						width={1000}
						height={500}
						alt="Login Image"
					/>
				</div>
				<div className="flex flex-col justify-between w-full lg:w-1/2">
					<div className="flex flex-col p-12 gap-8">
						<h1 className={`${nunitoBlack.className} text-3xl uppercase`}>
							DON&apos;T worry
						</h1>
						<div className="flex-col flex gap-2">
							<p className="text-lg text-gray-400">
								We are here to help you to recover your password. Enter your
								email adress that you used to register and we’ll give you
								instructions to reset your password.
							</p>
						</div>

						<div className="flex-col flex gap-2">
							<input
								type="text"
								placeholder="Enter your email address"
								className="bg-white rounded-lg border border-1 border-gray-500 text-xs md:text-base p-3"
							/>
						</div>

						<div className="flex justify-between items-center ">
							<h3 className="text-xl text-blue-950 underline">Resend Link</h3>
							<button className="btn w-36 shadow-xl bg-blue-600 text-white rounded-lg hover:bg-blue-900 text-xs md:text-base p-3">
								Send
							</button>
						</div>
					</div>
					<Footer />
				</div>
			</section>
		</>
	)
}

export default ForgotPassword
