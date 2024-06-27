"use client"
import { nunitoBold } from "@/styles/font"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"
const ProfileHeader = ({ username }) => {
	const router = useRouter()
	const handleBackClick = () => {
		router.back()
	}
	return (
		<div className="navbar px-8">
			<div className="navbar-start" onClick={handleBackClick}>
				<Icon
					icon="ic:baseline-arrow-back-ios"
					className="text-black w-6 h-6 font-bold"
				/>
				<h3
					className={`${nunitoBold.className} text-black text-base md:text-lg`}
				>
					Back
				</h3>
			</div>
			<div className="navbar-center">
				<h2
					className={`${nunitoBold.className} text-black text-lg md:text-lg w-1/2`}
				>
					{username}
				</h2>
			</div>
		</div>
	)
}

export default ProfileHeader
