"use client"
import CardProfileInfo from "@/components/molecules/CardProfileInfo"
import Navbar from "@/components/organisms/Navbar"
import Image from "next/image"
import React from "react"
import { useDetailProfileQuery } from "@/hooks/useProfileQuery"
import Footer from "@/components/organisms/Footer"
import ProfileHeader from "@/components/molecules/ProfileHeader"
import Link from "next/link"
import SectionArticleByUser from "@/components/organisms/SectionArticleByUser"

const ProfilePage = () => {
	const { data, isLoading } = useDetailProfileQuery()
	return (
		<>
			<Navbar />
			{isLoading ? (
				<div className="flex items-center w-full justify-center">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			) : (
				<>
					<ProfileHeader username={data.data.username} />
					<div className="flex flex-col py-10 w-full h-[480px] gap-3 relative">
						<Image
							src={
								data.data.picture === ""
									? `/profile-banner.png`
									: data.data.picture
							}
							alt={`Avatar`}
							width={1000}
							height={100}
							className="object-cover w-full h-60"
							priority
						/>

						{/* start CardProfile Component */}

						<div className="flex md:flex-row flex-col md:gap-4 items-center md:justify-center absolute inset-x-0 md:bottom-20 bottom-0 gap-2">
							<CardProfileInfo
								src={
									data.data.picture === ""
										? `/avatar-placeholder.png`
										: data.data.picture
								}
								username={data.data.username}
								about={
									data.data.about === ""
										? `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `
										: data.data.about
								}
							/>
							<div className="flex md:flex-row flex-col  text-white md:gap-2 gap-4 pt-8 md:pt-0">
								<div className="flex flex-col justify-end ">
									<button className="btn btn-wide bg-blueprimary hover:bg-blueprimary/85">
										Message
									</button>
								</div>
								<div className="flex flex-col justify-end">
									<Link
										className="btn btn-wide bg-textprimary hover:bg-textprimary/85"
										href={`article/write-article`}
									>
										Create Article
									</Link>
								</div>
								<div className="flex flex-col justify-end">
									<button className="btn btn-wide bg-textprimary hover:bg-textprimary/85">
										Following
									</button>
								</div>
								<div className="flex flex-col justify-end">
									<Link
										className="btn btn-wide bg-textprimary hover:bg-textprimary/85"
										href={`profile/edit-profile/${data.data.id}`}
									>
										Edit
									</Link>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			<SectionArticleByUser />
			<Footer />
		</>
	)
}

export default ProfilePage
