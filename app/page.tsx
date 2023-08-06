import McqForm from "../components/mcqform";
import tests from "../public/data/tests.json";
import Image from "next/image";
import ListItem from "../components/ui/ListItem";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="h-40 w-full bg-cyan-600 text-white flex flex-col justify-center items-center">
        <h2 className="text-xl">Streak &#128293;</h2>
        <div>
          <span className="text-6xl font-bold">69</span>
          <span>days</span>
        </div>
      </div>
      <section className="w-full flex flex-col justify-start p-4 gap-y-4">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-lg ml-2">Decks</span>
          <button className="flex flex-row justify-center items-center">
            <span className="text-stone-500">last reviewed</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
        <ListItem href="/cards/zh-01" text="中学华文" time="2 days ago" icon="bg-amber-200" />
        <div className="flex justify-center">
          <button className="p-2 border-2 w-1/3 rounded-sm">Add Deck +</button>
        </div>
      </section>
    </main>
  );
}
