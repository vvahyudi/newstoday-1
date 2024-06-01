import React from "react"
import Image from "next/image"
import { nunitoBase, nunitoBold, nunitoMedium } from "@/styles/font"

const CardProfileInfo = ({ src, username, about }) => {
	return (
		<div className="flex flex-col bg-bggray shadow-2xl rounded-lg px-5 py-10 w-72 gap-3 relative">
			<div className="flex justify-around space-x-2">
				<div className="avatar">
					<div className="w-20 rounded-xl ring ring-cyan-300">
						<Image
							src={src}
							alt={`Avatar`}
							width={100}
							height={100}
							className="object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-around">
					<h4 className={`${nunitoMedium.className} text-gray-500`}>
						@{username}
					</h4>
					<h3 className={`${nunitoBold.className} text-xl`}>{username}</h3>
					<h3 className={`${nunitoBase.className} text-blue-600 text-lg`}>
						Member
					</h3>
				</div>
			</div>
			<h2 className={`${nunitoBold.className} text-xl`}>About Me</h2>
			<p>{about}</p>
			<div className="flex py-2 mx-8 join absolute bg-blueprimary bottom-0 inset-x-0 -mb-8">
				<div className="join-item flex w-full flex-col items-center justify-center">
					<h2 className={`${nunitoBold.className} text-xl text-neutral-50`}>
						52
					</h2>
					<h2 className={`${nunitoBase.className} text-xs text-neutral-50`}>
						Post
					</h2>
				</div>
				<div className="join-item flex w-full flex-col items-center justify-center">
					<h2 className={`${nunitoBold.className} text-xl text-neutral-50`}>
						250
					</h2>
					<h2 className={`${nunitoBase.className} text-xs text-neutral-50`}>
						Visitor
					</h2>
				</div>
				<div className="join-item flex w-full flex-col items-center justify-center">
					<h2 className={`${nunitoBold.className} text-xl text-neutral-50`}>
						4.5K
					</h2>
					<h2 className={`${nunitoBase.className} text-xs text-neutral-50`}>
						Comment
					</h2>
				</div>
			</div>
		</div>
	)
}

export default CardProfileInfo
