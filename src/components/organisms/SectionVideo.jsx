import { georgiaBold, latoBold } from "@/styles/font"

import Image from "next/image"
const SectionVideo = () => {
	return (
		<section className="w-full bg-blueprimary/10">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-center">
					<div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full lg:py-16">
						<Image src={`/video.png`} alt={`Video`} width={600} height={600} />
					</div>

					<div className="lg:py-24 max-w-md flex flex-col gap-4 items-center md:items-center">
						<h2
							className={`text-4xl ${georgiaBold.className} md:text-4xl text-center`}
						>
							Let&apos;s hear about
							<br /> Kayla&apos;s success story
						</h2>

						<p className={`mt-4  text-2xl ${latoBold.className} text-center`}>
							See how well News Today works in a real user’s life.
						</p>

						<a
							href="#"
							className="mt-8 inline-block rounded bg-blueprimary px-12 py-3 text-lg text-white transition hover:bg-blueprimary/80 focus:outline-none "
						>
							Let&apos;s get started
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionVideo
