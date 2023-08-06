import Image from "next/image"
import happyPeople from '../../public/happy people@3x.png'
import Link from "next/link"

export default function CompletedPage() {
    return <main className="flex flex-col h-full justify-evenly items-center p-4">
        <p className="text-2xl font-semibold">You're done!</p>
        
        <Image src={happyPeople} alt="background image" />

        <Link href="/">
            <button className="px-6 py-4 bg-violet-500 rounded-xl text-xl text-white">
                Return to home page
            </button>
        </Link>
    </main>
}