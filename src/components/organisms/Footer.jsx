"use client"
import { nunitoBlack } from "@/styles/font"

const Footer = () => {
	return (
		<div className="flex flex-col w-full justify-between text-white bg-blueprimary p-8 gap-8">
			<div className="flex justify-between items-center">
				<h3 className="text-sm lg:text-xl">Why News Today</h3>
				<h3 className={`${nunitoBlack.className} text-xl lg:text-2xl`}>
					News Today
				</h3>
			</div>
			<div className="flex justify-between items-start">
				<h3 className="text-sm lg:text-xl">Be an author</h3>
				<p className="text-sm lg:text-xl text-right ">
					Jendral Sudirman Street No. 23 <br /> Jakarta, Indonesia
				</p>
			</div>
			<div className="flex justify-between items-center">
				<h3 className="text-sm lg:text-xl">Community</h3>
				<h3 className="text-sm lg:text-xl">(621)989898934</h3>
			</div>
			<div className="flex justify-between items-center">
				<h3 className="text-sm lg:text-xl">FAQ</h3>
				<h3 className="text-sm lg:text-xl">newstoday@mail.com</h3>
			</div>
		</div>
	)
}

export default Footer
