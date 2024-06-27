"use client"
import { nunitoBold } from "@/styles/font"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"
const ArticleHeader = ({ sendIcon }) => {
	const router = useRouter()

	const handleBackClick = () => {
		router.back() // Navigate to the previous page
	}
	return (
		<div className="flex justify-between bg-white gap-4 w-full">
			<div className="flex" onClick={handleBackClick}>
				<Icon
					icon="ic:baseline-arrow-back-ios"
					className="text-black w-6 h-6 font-bold"
				/>
				<h3 className={`${nunitoBold.className} text-black text-base`}>Back</h3>
			</div>

			<div className="flex">{sendIcon}</div>
		</div>
	)
}

export default ArticleHeader
