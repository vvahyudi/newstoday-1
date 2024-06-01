import { Nunito_Sans, Noto_Serif_Georgian, Lato } from "next/font/google"

const nunitoBase = Nunito_Sans({ subsets: ["latin"], weight: ["400"] })
const nunitoMedium = Nunito_Sans({ subsets: ["latin"], weight: ["500"] })
const nunitoBold = Nunito_Sans({ subsets: ["latin"], weight: ["800"] })
const nunitoBlack = Nunito_Sans({ subsets: ["latin"], weight: ["900"] })

const georgiaBold = Noto_Serif_Georgian({ subsets: ["latin"], weight: ["700"] })

const latoBase = Lato({ subsets: ["latin"], weight: ["400"] })
const latoBold = Lato({ subsets: ["latin"], weight: ["700"] })

export {
	nunitoBase,
	nunitoMedium,
	nunitoBold,
	nunitoBlack,
	georgiaBold,
	latoBase,
	latoBold,
}
