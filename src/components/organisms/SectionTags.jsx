import { nunitoBold, nunitoMedium } from "@/styles/font"

const SectionTags = () => {
	return (
		<section className="flex flex-col w-full p-10 gap-4">
			<div className="flex justify-between">
				<h2
					className={`${nunitoBold.className} text-textprimary text-lg md:text-2xl`}
				>
					Popular Tags
				</h2>
				<h3
					className={`text-sm md:text-lg text-blueprimary ${nunitoMedium.className}`}
				>
					More
				</h3>
			</div>
			<div className="flex gap-5 overflow-x-scroll no-scrollbar">
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#ladygaga
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#jokowidodo
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#dayniki
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#ladygaga
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#jokowidodo
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#dayniki
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#ladygaga
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#jokowidodo
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#dayniki
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blueprimary bg-blueprimary/20 p-2 rounded-lg`}
				>
					#ladygaga
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blue-600 bg-blueprimary/20 p-2 rounded-lg`}
				>
					#jokowidodo
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blue-600 bg-blueprimary/20 p-2 rounded-lg`}
				>
					#dayniki
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blue-600 bg-blueprimary/20 p-2 rounded-lg`}
				>
					#ladygaga
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blue-600 bg-blueprimary/20 p-2 rounded-lg`}
				>
					#jokowidodo
				</h3>
				<h3
					className={`${nunitoBold.className} text-lg text-blue-600 bg-blueprimary/20 p-2 rounded-lg`}
				>
					#dayniki
				</h3>
			</div>
		</section>
	)
}

export default SectionTags
