import React from "react"
import Image from "next/image"
import { nunitoBold } from "@/styles/font"

const SectionComment = () => {
	return (
		<section className="flex flex-col w-full gap-4 py-10">
			<h2 className={`text-2xl ${nunitoBold.className}`}>2 Comments</h2>
			<div className="flex justify-start space-x-2">
				<div className="avatar">
					<div className="rounded-xl w-14 h-14">
						<Image
							src={`/avatar-placeholder.png`}
							alt={`Avatar`}
							width={100}
							height={100}
							className="object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-2 w-full">
					<h4 className={`text-blue-950 ${nunitoBold.className} text-lg`}>
						You
					</h4>
					<textarea
						className="textarea textarea-bordered"
						placeholder="Leave a comment"
					></textarea>
					<div className="flex items-start">
						<button
							className={`btn-sm btn bg-blue-600 normal-case border-0 text-base text-center text-white`}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
			{/* comment */}
			<div className="flex justify-start space-x-2">
				<div className="avatar">
					<div className="rounded-xl w-14 h-14">
						<Image
							src={`/avatar-placeholder.png`}
							alt={`Avatar`}
							width={100}
							height={100}
							className="object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-start">
					<h4 className={`text-blue-950 ${nunitoBold.className} text-lg`}>
						Richard Gervain - 1m ago
					</h4>
					<span className={`text-lg text-black prose`}>
						Couldn’t agree more!
					</span>
				</div>
			</div>
		</section>
	)
}

export default SectionComment
