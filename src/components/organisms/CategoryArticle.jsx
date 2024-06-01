const CategoryArticle = ({ children }) => {
	return (
		<>
			{children}
			<div className="flex items-center justify-center w-full py-20">
				<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case text-blueprimary hover:bg-blueprimary/60 border-0 bg-blueprimary/40  w-96 h-72">
					Load Another 30+ Category
				</button>
			</div>
		</>
	)
}

export default CategoryArticle
