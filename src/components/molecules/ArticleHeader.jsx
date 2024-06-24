"use client"
import { nunitoBold } from "@/styles/font"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"
const ArticleHeader = ({ page_name, sendIcon }) => {
	const router = useRouter()

	const handleBackClick = () => {
		router.back() // Navigate to the previous page
	}
	return (
		<div className="navbar bg-white">
			<div className="navbar-start" onClick={handleBackClick}>
				<Icon
					icon="ic:baseline-arrow-back-ios"
					className="text-black w-6 h-5 font-bold"
				/>
				<h3 className={`${nunitoBold.className} text-black text-lg`}>Back</h3>
			</div>
			<div className="navbar-center">
				<h2 className={`${nunitoBold.className} text-black text-2xl`}>
					{page_name}
				</h2>
			</div>
			<div className="navbar-end">{sendIcon}</div>
		</div>
	)
}

export default ArticleHeader
