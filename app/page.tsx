import McqForm from "../components/mcqform";
import tests from "../public/data/tests.json";
import Image from "next/image";
import ListItem from "../components/ui/ListItem";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col grow items-center p-8 w-full">
      <div className="h-40 w-full bg-indigo-500 text-white flex flex-col justify-center items-center rounded-3xl">
        <h2 className="text-xl">Streak &#128293;</h2>
        <div>
          <span className="text-6xl font-bold">2</span>
          <span>days</span>
        </div>
      </div>
      <section className="w-full flex flex-col justify-start mt-8 gap-y-4">
        <div className="flex flex-row justify-between">
          <span className="font-semibold text-2xl ml-2">Decks</span>
          <button className="flex flex-row justify-center items-center">
            <span className="text-stone-500">last reviewed</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
        <ListItem
          href="/cards/zh-01"
          text="中学华文"
          time="Recently Added"
          icon="bg-amber-400"
        />
        <ListItem href="/" text="JLPT N1" time="1d ago" icon="bg-red-400" />
        <div className="flex justify-center">
          <button className="px-6 py-4 border border-neutral-300 rounded-xl mt-2 text-white bg-indigo-500 shadow-sm">
            Add Deck +
          </button>
        </div>
      </section>
    </main>
  );
}
