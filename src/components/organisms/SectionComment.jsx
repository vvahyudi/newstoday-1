"use client"
import React, { useState } from "react"
import Image from "next/image"
import { nunitoBold } from "@/styles/font"
import moment from "moment"

const SectionComment = ({
	commentatorAvatar,
	commentatorName,
	commentDate,
	commentContent,
}) => {
	return (
		<section className="flex flex-col w-full gap-4 pt-8">
			{/* comment */}
			<div className="flex justify-start space-x-2">
				<div className="avatar">
					<div className="rounded-xl w-14 h-14">
						<Image
							src={commentatorAvatar}
							alt={`Avatar`}
							width={100}
							height={100}
							className="object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-start">
					<h4 className={`text-blue-950 ${nunitoBold.className} text-lg`}>
						{commentatorName} - {moment({ commentDate }).format("LL")}
					</h4>
					<span className={`text-lg text-black prose`}>{commentContent}</span>
				</div>
			</div>
		</section>
	)
}

export default SectionComment
