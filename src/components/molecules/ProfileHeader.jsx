import { nunitoBold } from "@/styles/font"
import { Icon } from "@iconify/react"
const ProfileHeader = ({ username }) => {
	return (
		<div className="flex justify-start w-full px-10">
			<div className="flex items-center w-1/2 justify-start">
				<Icon
					icon="ic:baseline-arrow-back-ios"
					className="text-black w-6 h-5 font-bold"
				/>
				<h3 className={`${nunitoBold.className} text-black text-lg`}>Back</h3>
			</div>
			<h2 className={`${nunitoBold.className} text-black text-2xl w-1/2`}>
				{username}
			</h2>
		</div>
	)
}

export default ProfileHeader
