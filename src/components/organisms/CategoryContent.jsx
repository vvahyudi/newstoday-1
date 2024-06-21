import React from "react"
import { nunitoBold } from "@/styles/font"

const CategoryContent = ({ title, children }) => {
	return (
		<section className="flex flex-col w-full p-10 gap-4 ">
			<div className="flex justify-between">
				<h2 className={`${nunitoBold.className} text-textprimary text-2xl`}>
					{title}
				</h2>
			</div>
			<div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
				{children}
			</div>
		</section>
	)
}

export default CategoryContent
