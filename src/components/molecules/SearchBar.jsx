import React from "react"
import { Icon } from "@iconify/react"
import { nunitoBold } from "@/styles/font"

const SearchBar = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="relative">
				<input
					className="input w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-0 focus-within:outline-0 join-item"
					placeholder="Search"
				/>
				<div
					className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
				>
					<Icon icon="material-symbols:search" className="w-6 h-6 " />
				</div>
			</div>
		</div>
	)
}

export default SearchBar
