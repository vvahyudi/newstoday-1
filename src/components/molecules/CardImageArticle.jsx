const CardImageArticle = ({ children }) => {
	return (
		<div className="flex-col flex md:flex-row items-center sm:justify-center sm:items-center p-8 gap-4 w-full">
			{children}
		</div>
	)
}

export default CardImageArticle
