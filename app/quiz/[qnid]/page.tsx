"use client";

import { quizzes } from "../page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import McqForm from "../../../components/mcqform";

import jsonData from "../../../public/data/tests.json";

import { useState, useEffect } from "react";

function SkeletonStack({ answerShowing, params }: any) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, Math.floor(3500 + Math.random() * 3500));
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (showSkeleton) {
    return (
      <div className="skeleton flex flex-col gap-4">
        <div className="animate-pulse h-16 bg-neutral-300 rounded-sm"></div>
        <div className="animate-pulse h-16 bg-neutral-300 rounded-sm "></div>
        <div className="animate-pulse h-16 bg-neutral-300 rounded-sm "></div>
        <div className="animate-pulse h-16 bg-neutral-300 rounded-sm "></div>
      </div>
    );
  } else {
    return (
      <McqForm
        word={jsonData[Number(params.qnid)].word}
        false_options={jsonData[Number(params.qnid)].false_options}
        answerShowing={answerShowing}
      />
    );
  }
}

export default function QuizPage({ params }: { params: { qnid: string } }) {
  const [answerShowing, setAnswerShowing] = useState(false);
  const [qnDone, setQnDone] = useState(false);

  return (
    <section className="z-10 flex flex-col items-start">
      <button>
        <ArrowLeft className="stroke-white w-10 h-10" />
      </button>
      <span className="text-white text-3xl mb-6">{quizzes[0]}</span>
      <section className=" flex flex-col justify-evenly p-6 bg-white rounded-xl shadow h-[30rem] mb-10">
        <p id="question" className="text-lg">
          {jsonData[Number(params.qnid)].part1}
          <span
            id="qn-blank"
            className="border-b-stone-800 border-b w-10 inline-block mx-1"
          ></span>
          {jsonData[Number(params.qnid)].part2}
        </p>
        <SkeletonStack answerShowing={answerShowing} params={params} />
      </section>
      <div className="flex justify-center items-center w-full">
        {qnDone ? (
          <Link
            href={
              Number(params.qnid) < jsonData.length - 1
                ? `/quiz/${Number(params.qnid) + 1}`
                : `/completed`
            }
            className="px-6 py-4 bg-violet-500 rounded-xl text-xl text-white"
          >
            Next
          </Link>
        ) : (
          <button
            className="px-6 py-4 bg-violet-500 rounded-xl text-xl text-white shadow"
            onClick={(e) => {
              setAnswerShowing(true);
              setQnDone(true);
            }}
          >
            Confirm
          </button>
        )}
      </div>
    </section>
  );
}
