"use client"
import { georgiaBold, latoBase } from "@/styles/font"
import Image from "next/image"

const Hero = ({ className, src, title, description, children }) => {
	return (
		<section>
			<div className={className}>
				<Image
					src={src}
					width={2000}
					height={1000}
					className="absolute inset-0 object-cover w-full h-full"
					alt="Hero"
					priority
				/>
				<div className="relative bg-white bg-opacity-10 min-h-screen">
					<div className="flex flex-col max-w-3xl gap-8 justify-center items-center md:items-start px-20 py-10">
						<h2
							className={` mb-6 font-sans text-4xl font-bold tracking-normal text-textprimary md:text-6xl sm:leading-normal ${georgiaBold.className}`}
						>
							{title}
						</h2>
						<p
							className={`max-w-xl mb-4 text-xl text-textprimary md:text-2xl ${latoBase.className}`}
						>
							{description}
						</p>
						{children}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
