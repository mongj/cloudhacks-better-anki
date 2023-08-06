import Image from "next/image";
import ListItem from "../../components/ui/ListItem";

import expandIcon from "../../public/svg/expand_more_FILL0_wght400_GRAD0_opsz48 (2).svg";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-40 w-full bg-violet-500 text-white flex flex-col justify-center items-center">
        <h2 className="text-xl">Streak &#128293;</h2>
        <div>
          <span className="text-6xl font-bold">420</span>
          <span>days</span>
        </div>
      </div>
      <section className="w-full flex flex-col justify-start p-4 gap-y-4">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-lg ml-2">Quizzes</span>
          <button className="flex flex-row justify-center items-center">
            <span className="text-stone-500">familiarity</span>
            <Image className="h-6 w-6" src={expandIcon} alt="expand" />
          </button>
        </div>
        <ListItem
          href="/quiz/01"
          text="中学华文"
          time="2 days ago"
          icon="bg-amber-200"
        />
      </section>
    </main>
  );
}

export const quizzes = ["中学普通华文"];
