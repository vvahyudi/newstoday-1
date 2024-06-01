import { nunitoBold } from "@/styles/font"
import Image from "next/image"

const CardCategory = ({ className, src, label, alt }) => {
	return (
		<div className={className}>
			<Image
				src={src}
				width={200}
				height={200}
				alt={alt}
				className="object-cover rounded-lg w-32 h-40 md:w-52 md:h-60"
			/>
			<h3 className={`${nunitoBold.className} text-lg md:text-xl`}>{label}</h3>
		</div>
	)
}

export default CardCategory
