import Image from "next/image";
import highFive from "../../public/high_five.svg";
import Link from "next/link";

export default function CompletedPage() {
  return (
    <main className="flex flex-col h-full justify-evenly items-center p-12">
      <div>
        <p className="text-xl text-center mb-2">
          {"Congrats! You have reached the end of this exercise!"}
        </p>
        <p className="text-3xl font-bold text-center">{"中学华文"}</p>
      </div>

      <Image src={highFive} alt="background image" />

      <Link href="/">
        <button className="px-6 py-4 bg-violet-500 rounded-xl text-xl text-white">
          Return to home page
        </button>
      </Link>
    </main>
  );
}
