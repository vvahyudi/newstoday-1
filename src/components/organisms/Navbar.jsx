"use client"
import { georgiaBold, nunitoBold } from "@/styles/font"
import { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { deleteToken } from "@/app/signin/action"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useDetailProfileQuery } from "@/hooks/useProfileQuery"
const Navbar = ({ src }) => {
	const router = useRouter()
	const { data, isLoading } = useDetailProfileQuery()
	const [token, setToken] = useState(null)
	useEffect(() => {
		const getToken = localStorage.getItem("token")
		setToken(getToken)
	}, [])
	const handleLogout = async () => {
		localStorage.removeItem("token")
		await deleteToken()
		router.push("/signin")
	}
	return (
		<>
			{token ? (
				<div className="navbar bg-white border-b-2 border-bggray px-8 mb-8">
					<div className="navbar-start flex-1 w-1/3">
						<Link
							href={`/`}
							className={`${georgiaBold.className} normal-case text-3xl md:text-4xl text-textprimary`}
						>
							News Today
						</Link>
					</div>
					<div className="flex-1 w-1/3 navbar-center hidden lg:flex">
						<ul
							className={`menu menu-horizontal px-1 text-lg text-textprimary`}
						>
							<li>
								<Link href={`/article`}>Articles</Link>
							</li>
							<li>
								<Link href={`/category`}>Category</Link>
							</li>

							<li>
								<Link href={`#`}>About</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1 w-1/3 navbar-end gap-2">
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
								{isLoading ? (
									<div className="flex items-center w-full justify-center">
										<span className="loading loading-spinner loading-lg"></span>
									</div>
								) : (
									<div className="w-10 rounded-full">
										{data ? (
											<Image
												alt="Profile Picture"
												src={
													data.data.picture === ""
														? `/avatar-placeholder.png`
														: data.data.picture
												}
												width={100}
												height={100}
											/>
										) : null}
									</div>
								)}
							</div>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-bggray rounded-box w-52"
							>
								<li>
									<Link className="justify-between" href={`/profile`}>
										Profile
									</Link>
								</li>

								<li>
									<Link href={`/article`}>Articles</Link>
								</li>
								<li>
									<Link href={`/category`}>Category</Link>
								</li>

								<li>
									<a>About</a>
								</li>

								<li>
									<button onClick={handleLogout}>Logout</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				<nav className="navbar bg-white shadow-xl w-full px-8">
					<div className="navbar-start w-1/3">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-ghost lg:hidden">
								<Icon
									icon="heroicons-solid:menu-alt-2"
									className="text-textprimary w-8 h-8"
								/>
							</label>
							<ul
								tabIndex={0}
								className={`${nunitoBold.className} text-textprimary divide-y bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52`}
							>
								<li>
									<Link href={`/home`}>Home</Link>
								</li>

								<li>
									<Link href={`/article`}>Articles</Link>
								</li>
								<li>
									<Link href={`/category`}>Category</Link>
								</li>

								<li>
									<a>About</a>
								</li>
								<li>
									<Link href={`/signup`}>Signup</Link>
								</li>
								<li>
									<Link
										className={`btn-sm btn bg-blueprimary normal-case border-0 text-base text-center text-white`}
										href={`/signin`}
									>
										Login
									</Link>
								</li>
							</ul>
						</div>
						<a
							className={`${georgiaBold.className} btn btn-ghost normal-case text-4xl text-textprimary`}
						>
							News Today
						</a>
					</div>
					<div className="navbar-center w-1/3 mx-8 hidden md:block">
						<ul
							className={`menu menu-horizontal px-1 text-lg text-textprimary`}
						>
							<li>
								<Link className={`${nunitoBold.className}`} href={`/home`}>
									Home
								</Link>
							</li>

							<li>
								<Link href={`/article`}>Articles</Link>
							</li>
							<li>
								<Link href={`/category`}>Category</Link>
							</li>

							<li>
								<Link href={`#`}>About</Link>
							</li>
						</ul>
					</div>
					<div className="hidden md:block navbar-end w-1/3 space-x-8">
						<Link
							className={`text-lg ${nunitoBold.className} text-textprimary`}
							href={`/signup`}
						>
							Signup
						</Link>
						<Link
							className={`btn bg-blueprimary hover:bg-blueprimary/80 normal-case border-0 text-lg text-white`}
							href={`/signin`}
						>
							Login
						</Link>
					</div>
				</nav>
			)}
		</>
	)
}

export default Navbar
