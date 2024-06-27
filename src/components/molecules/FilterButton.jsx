import { Icon } from "@iconify/react"
import { nunitoBold } from "@/styles/font"
import Link from "next/link"
const FilterButton = () => {
	return (
		<div className="flex items-center gap-1 justify-center p-8">
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="flex items-center gap-1 justify-start">
					<Icon
						icon="mdi:filter"
						className="w-6 h-6 md:w-10 md:h-10 text-textprimary"
					/>
					<h3 className="text-sm md:text-xl text-textprimary">sort by</h3>
					<h3
						className={`${nunitoBold.className} text-sm md:text-xl text-textprimary`}
					>
						category
					</h3>
				</label>
				<ul
					tabIndex={0}
					className={`menu menu-sm divide-y bg-bggray dropdown-content dropdown-end mt-3 z-[1] p-2 shadow-2xl text-textprimary rounded-box`}
				>
					<li>
						<Link href="#">Name (A-Z)</Link>
					</li>

					<li>
						<Link href="#">Name (Z-A)</Link>
					</li>
					<li>
						<Link
							href="#"
							className={`${nunitoBold.className} text-textprimary`}
						>
							Category
						</Link>
					</li>
					<li>
						<Link href="#">Last Added</Link>
					</li>
					<li>
						<Link href="#">Last Modified</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default FilterButton
