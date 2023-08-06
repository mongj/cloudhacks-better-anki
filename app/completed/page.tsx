import Image from "next/image";
import highFive from "../../public/high_five.svg";
import Link from "next/link";

export default function CompletedPage() {
  return (
    <main className="flex flex-col h-full justify-evenly items-center p-12">
      <p className="text-3xl font-semibold text-center">
        {"You've reached the end of this exercise!"}
      </p>

      <Image src={highFive} alt="background image" />

      <Link href="/">
        <button className="px-6 py-4 bg-violet-500 rounded-xl text-xl text-white">
          Return to home page
        </button>
      </Link>
    </main>
  );
}
