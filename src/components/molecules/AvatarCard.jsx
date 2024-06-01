import { nunitoBold } from "@/styles/font"
import Image from "next/image"

const AvatarCard = () => {
	return (
		<div className="flex justify-start space-x-2">
			<div className="avatar">
				<div className="rounded-xl w-20">
					<Image
						src={`/avatar-placeholder.png`}
						alt={`Avatar`}
						width={100}
						height={100}
						className="object-cover"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-2">
				<h4 className={`text-blue-950 ${nunitoBold.className} text-lg`}>
					Richard Gervain - Author
				</h4>
				<span className={`text-sm text-gray-500`}>Wed, March 3rd 2021</span>
			</div>
		</div>
	)
}

export default AvatarCard
