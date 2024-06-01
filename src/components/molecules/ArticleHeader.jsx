import { nunitoBold } from "@/styles/font"
import { Icon } from "@iconify/react"
const ArticleHeader = () => {
	return (
		<div className="flex justify-between w-full">
			<div className="flex items-center justify-start">
				<Icon
					icon="ic:baseline-arrow-back-ios"
					className="text-black w-6 h-5 font-bold"
				/>
				<h3 className={`${nunitoBold.className} text-black text-lg`}>Back</h3>
			</div>
			<h2 className={`${nunitoBold.className} text-black text-2xl`}>
				Article Viewer
			</h2>
			<Icon icon="bi:send" className="text-black w-9 h-9 font-bold" />
		</div>
	)
}

export default ArticleHeader
