import "../styles/globals.css"
import TanstackProvider from "@/providers/TanstackProvider"
export const metadata = {
	title: "News App - Stay Informed on the Go",
	description:
		"Dive deeper into the news that matters. News App curates top stories and delivers them to you in a clean, organized way.	",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<TanstackProvider>
				<body>{children}</body>
			</TanstackProvider>
		</html>
	)
}
