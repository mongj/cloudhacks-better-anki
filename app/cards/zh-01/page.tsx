"use client";

import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const words = [
  {
    "word-zh": "阅读",
    "word-en": "read",
    pronunciation: "yuè dú",
  },
  {
    "word-zh": "宇宙",
    "word-en": "universe",
    pronunciation: "yŭ zhòu",
  },
  {
    "word-zh": "创意",
    "word-en": "creativity",
    pronunciation: "chuàng yì",
  },
  {
    "word-zh": "美味",
    "word-en": "delicious",
    pronunciation: "měi wèi",
  },
  {
    "word-zh": "探索",
    "word-en": "explore",
    pronunciation: "tàn suǒ",
  },
  {
    "word-zh": "牛逼",
    "word-en": "impressive",
    pronunciation: "niú bī",
  },
  {
    "word-zh": "面馆",
    "word-en": "noodle shop",
    pronunciation: "miàn guǎn",
  },
  {
    "word-zh": "证据",
    "word-en": "evidence",
    pronunciation: "zhèng jù",
  },
  {
    "word-zh": "世界",
    "word-en": "world",
    pronunciation: "shì jiè",
  },
  {
    "word-zh": "主厨",
    "word-en": "head chef",
    pronunciation: "zhǔ chú",
  },
  {
    "word-zh": "秘方",
    "word-en": "secret recipe",
    pronunciation: "mì fāng",
    sentence: "面馆的主厨是一个老奶奶，有人问她煮面的秘方",
  },
  {
    "word-zh": "神秘",
    "word-en": "mysterious",
    pronunciation: "shén mì",
    sentence: "他喜欢阅读关于宇宙的书籍，以此来探索那个神秘的世界",
  }
];

function SkeletonStack({ deckIndex }: any) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, Math.floor(2000 + Math.random() * 4000));
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (showSkeleton) {
    return (
      <div className="skeleton flex flex-col gap-2 absolute top-0 left-0 w-full">
        <div className="animate-pulse h-5 bg-neutral-300 rounded-sm"></div>
        <div className="animate-pulse h-5 bg-neutral-300 rounded-sm "></div>
      </div>
    );
  } else {
    return (
      <span className="generated-sentence absolute top-0 left-0">
        {words[deckIndex]["sentence"]}
      </span>
    );
  }
}

export default function Page() {
  const router = useRouter();
  const [deckIndex, setDeckIndex] = useState(0);

  function handleRevealClick() {
    document.querySelector(".card-back")?.classList.toggle("invisible");
    document.querySelector(".flip-button")?.classList.toggle("invisible");
    document.querySelector(".rate-button")?.classList.toggle("invisible");
  }

  function handleRateClick() {
    if (deckIndex === words.length - 1) {
      router.push("/completed");
      return;
    }
    setDeckIndex(deckIndex + 1);
    document.querySelector(".card-back")?.classList.toggle("invisible");
    document.querySelector(".flip-button")?.classList.toggle("invisible");
    document.querySelector(".rate-button")?.classList.toggle("invisible");
  }

  function Sentence() {
    if (words[deckIndex].hasOwnProperty("sentence")) {
      return (
        <div>
          <p className="mb-1 text-neutral-500">Example:</p>
          <div className="relative">
            <SkeletonStack deckIndex={deckIndex} />
          </div>
        </div>
      );
    }
    return (
      <div>
        <p className="mb-1">🔒 Example:</p>
        <span className="text-neutral-500">
          Go through a few more cards first!
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-full w-full">
        <div className="bg-neutral-50 h-full" />
        <div className="absolute top-0 left-0 bg-indigo-500 h-2/5 w-full rounded-b-3xl" />
        <div className="flex flex-col gap-8 absolute top-0 left-0 p-12 w-full h-full">
          <ArrowLeft color="white" size={48} />
          <div>
            <p className="text-xl text-neutral-200">中学普通华文</p>
            <h1 className="text-3xl text-white">Words seen: {deckIndex}</h1>
          </div>
          <div className="flex flex-grow relative">
            <div className="card-front flex flex-col bg-white flex-grow h-full w-full rounded-2xl shadow place-content-center absolute top-0 left-0 visible">
              <h1 className="text-7xl text-center font-bold">
                {words[deckIndex]["word-zh"]}
              </h1>
            </div>
            <div className="card-back flex flex-col gap-4 bg-white flex-grow h-full w-full p-8 rounded-2xl shadow place-content-center absolute top-0 left-0 invisible">
              <h1 className="text-7xl text-center font-bold">
                {words[deckIndex]["word-zh"]}
              </h1>
              <h3 className="text-3xl text-center text-neutral-700">
                {words[deckIndex]["pronunciation"]}
              </h3>
              <hr />
              <h3 className="text-3xl text-center text-neutral-700">
                {words[deckIndex]["word-en"]}
              </h3>
              <hr />
              <Sentence />
            </div>
          </div>
          <div className="h-16 relative">
            <button
              className="flip-button bg-indigo-500 text-white p-4 rounded-2xl w-full h-full absolute top-0 left-0"
              onClick={handleRevealClick}
            >
              FLIP CARD
            </button>
            <div className="rate-button flex flex-row bg-white rounded-2xl w-full h-full absolute top-0 left-0 shadow invisible overflow-clip">
              <div className="flex flex-col grow border-r">
                <div className="bg-red-500 w-full h-2"></div>
                <button className="grow" onClick={handleRateClick}>
                  AGAIN
                </button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-yellow-500 w-full h-2"></div>
                <button className="grow" onClick={handleRateClick}>
                  HARD
                </button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-blue-500 w-full h-2"></div>
                <button className="grow" onClick={handleRateClick}>
                  GOOD
                </button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-green-500 w-full h-2"></div>
                <button className="grow" onClick={handleRateClick}>
                  EASY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
