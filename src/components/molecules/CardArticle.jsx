import { nunitoMedium } from "@/styles/font"
import Image from "next/image"

import { Icon } from "@iconify/react"
export const CardArticle = ({
	className,
	src,
	alt,
	title,
	description,
	like,
	publishDate,
	children,
}) => {
	return (
		<div className={className}>
			<figure>
				<Image
					priority
					src={src}
					width={500}
					height={500}
					alt={alt}
					className="object-cover rounded-lg w-40 h-52"
				/>
			</figure>
			<div className="w-full card-body">
				<h2 className="card-title text-blueprimary text-sm md:text-base lg:text-lg text-wrap">
					{title}
				</h2>
				<p
					className={`${nunitoMedium.className} text-wrap text-xs md:text-sm lg:text-base`}
				>
					{description}
				</p>
				<div className="card-actions justify-between items-center">
					<div className="flex items-center gap-1">
						<Icon
							icon="material-symbols:thumb-up-outline"
							className="w-4 h-4 lg:w-4 lg:h-4 text-textprimary"
						/>
						<span
							className={`text-xs md:text-sm lg:text-md text-textprimary ${nunitoMedium.className}`}
						>
							{like}
						</span>
					</div>
					<div className="flex items-center gap-1">
						<Icon
							icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
							className="w-4 h-4 lg:w-4 lg:h-4 text-textprimary"
						/>
						<span
							className={`text-sm md:text-sm lg:text-md text-textprimary ${nunitoMedium.className}`}
						>
							{publishDate}
						</span>
						<Icon
							icon="material-symbols:bookmark"
							className="w-6 h-6  lg:w-6 lg:h-6 text-blueprimary"
						/>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}
