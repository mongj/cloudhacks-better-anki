import Image from "next/image"
import Link from "next/link"
import quizIcon from '../../public/svg/quiz_FILL0_wght400_GRAD0_opsz48.svg'

export default function Navbar() {
    return <footer className="flex flex-row justify-evenly bg-gray-500 h-16">
        <Link href="/quiz">
            <Image alt="nav-item quiz" src={quizIcon} className="fill-white stroke-white text-white"/>
        </Link>

    </footer>
}