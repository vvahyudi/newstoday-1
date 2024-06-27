import React from "react"
// import AvatarCard from "../molecules/AvatarCard"
import { Icon } from "@iconify/react"
import { nunitoBold } from "@/styles/font"
import Image from "next/image"
import moment from "moment"

const SectionAvatar = ({ username, job, picture, created_at }) => {
	return (
		<section className="flex items-center justify-between py-8">
			<div className="flex justify-start space-x-2">
				<div className="avatar ">
					<div className="rounded-full h-16 w-16 md:w-24 md:h-24">
						<Image
							src={picture}
							alt={username}
							width={100}
							height={100}
							className="object-fit"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-2">
					<h4
						className={`text-blue-950 ${nunitoBold.className} text-sm md:text-base`}
					>
						{username} - {job}
					</h4>
					<span className={`text-xs base:text-sm text-gray-500`}>
						{moment({ created_at }).format("LL")}
					</span>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="flex items-center gap-1">
					<Icon
						icon="material-symbols:thumb-up-outline"
						className="w-5 h-5 md:w-10 md:h-10 text-blue-900"
					/>
					<span className={`text-sm text-blue-900 ${nunitoBold.className}`}>
						2.1k
					</span>
				</div>
				<div className="flex items-center gap-1">
					<Icon
						icon="material-symbols:bookmark-outline"
						className="w-5 h-5 md:w-10 md:h-10 text-blue-900/95"
					/>
				</div>
			</div>
		</section>
	)
}

export default SectionAvatar
