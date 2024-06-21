"use client"
import Footer from "@/components/organisms/Footer"
import Hero from "@/components/organisms/Hero"
import Navbar from "@/components/organisms/Navbar"
import SectionCategory1 from "@/components/organisms/SectionCategory1"
import SectionLatest from "@/components/organisms/SectionLatest"
import SectionRecommended from "@/components/organisms/SectionRecommended"
import SectionTags from "@/components/organisms/SectionTags"
import SectionVideo from "@/components/organisms/SectionVideo"
import { CardArticle } from "@/components/molecules/CardArticle"

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero
				className={`relative min-h-screen`}
				src={`/bg-hero.png`}
				title={`Share Information and Educate People`}
				description={`Everyone has their point of view of something, but just don’t be
				afraid to express the facts. Be an author and share you
				prespective of something to the world.`}
			>
				<button className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white text-2xl w-64 normal-case">
					Start Exploring
				</button>
			</Hero>
			<SectionTags />
			<SectionCategory1
			// moreCategory={"Click the category to explore articles"}
			/>
			<SectionRecommended />
			<SectionVideo />
			<SectionLatest />
			<Footer />
		</>
	)
}

export default Home
