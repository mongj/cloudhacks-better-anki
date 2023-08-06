import Image from "next/image"
import Link from "next/link"
import quizIcon from '../../public/svg/quiz_FILL0_wght400_GRAD0_opsz48.svg'
import settingsIcon from '../../public/svg/settings_FILL0_wght400_GRAD0_opsz48.svg'
import cardsIcon from '../../public/svg/style_FILL0_wght400_GRAD0_opsz48 (1).svg'

let iconStyle = "h-8"

export default function Navbar() {
    return <footer className="flex flex-row justify-evenly items-center  h-16
    shadow shadow-slate-700 bottom-0 w-screen">
        <Link href="/quiz">
            <Image alt="nav-item quiz" src={quizIcon} className={iconStyle} />
        </Link>
        <Link href="/">
            <Image alt="nav-item quiz" src={cardsIcon} className={iconStyle} />
        </Link>
        <div >
            <Image alt="nav-item settings" src={settingsIcon} className={iconStyle} />
        </div>
    </footer>
}