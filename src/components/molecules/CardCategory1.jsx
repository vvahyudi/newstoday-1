import { nunitoBold } from "@/styles/font"
import Image from "next/image"

const CardCategory1 = ({ src, alt, label, totalArticle }) => {
	return (
		<div className="">
			<div className="card flex flex-col w-32 h-44 md:w-44 md:h-56 gap-2 bg-white shadow-xl image-full">
				<figure>
					<Image
						src={src}
						width={100}
						height={100}
						alt={alt}
						className="object-cover rounded-lg contrast-50 w-32 h-60 md:w-52 md:h-60"
					/>
				</figure>
				<div className="card-body flex flex-col items-center justify-center">
					<h2 className="text-center text-white text-xl">
						{totalArticle} Article
					</h2>
				</div>
			</div>
			<h3 className={`${nunitoBold.className} text-center text-xl`}>{label}</h3>
		</div>
	)
}

export default CardCategory1
