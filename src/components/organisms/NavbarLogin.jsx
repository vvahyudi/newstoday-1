import { georgiaBold, nunitoBold } from "@/styles/font"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

const NavbarLogin = ({ src }) => {
	return (
		<div className="navbar bg-white">
			<div className="flex-1">
				<a
					className={`${georgiaBold.className} btn btn-ghost normal-case text-4xl text-textprimary`}
				>
					News Today
				</a>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<Image alt="Profile Picture" src={src} width={100} height={100} />
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-bggray rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavbarLogin
