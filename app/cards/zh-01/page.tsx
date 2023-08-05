"use client";

import { ArrowLeft } from "lucide-react";

export default function Page() {
  function handleClick() {
    document.querySelector(".card-back")?.classList.toggle("invisible");
    document.querySelector(".flip-button")?.classList.toggle("invisible");
    document.querySelector(".rate-button")?.classList.toggle("invisible");
  }

  return (
    <>
      <div className="relative h-full w-full">
        <div className="bg-neutral-50 h-full" />
        <div className="absolute top-0 left-0 bg-indigo-500 h-2/5 w-full rounded-b-3xl" />
        <div className="flex flex-col gap-8 absolute top-0 left-0 p-12 w-full h-full">
          <ArrowLeft color="white" size={48} />
          <h1 className="text-3xl text-white">中学普通华文</h1>
          <div className="flex flex-grow relative">
            <div className="card-front flex flex-col bg-white flex-grow h-full w-full rounded-2xl shadow place-content-center absolute top-0 left-0 visible">
              <h1 className="text-7xl text-center font-bold">神秘</h1>
            </div>
            <div className="card-back flex flex-col gap-4 bg-white flex-grow h-full w-full p-8 rounded-2xl shadow place-content-center absolute top-0 left-0 invisible">
              <h1 className="text-7xl text-center font-bold">神秘</h1>
              <h3 className="text-3xl text-center text-neutral-700">shén mì</h3>
              <hr />
              <h3 className="text-3xl text-center text-neutral-700">
                mysterious
              </h3>
              <hr />
              <div>
                <p className="mb-1">Example:</p>
                <span>
                  他喜欢阅读关于宇宙的书籍，以此来探索那个<b>神秘</b>的世界
                </span>
              </div>
            </div>
          </div>
          <div className="h-16 relative">
            <button
              className="flip-button bg-indigo-500 text-white p-4 rounded-2xl w-full h-full absolute top-0 left-0"
              onClick={handleClick}
            >
              FLIP CARD
            </button>
            <div className="rate-button flex flex-row bg-white rounded-2xl w-full h-full absolute top-0 left-0 shadow invisible overflow-clip">
              <div className="flex flex-col grow border-r">
                <div className="bg-red-500 w-full h-2"></div>
                <button className="grow">AGAIN</button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-yellow-500 w-full h-2"></div>
                <button className="grow">HARD</button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-blue-500 w-full h-2"></div>
                <button className="grow">GOOD</button>
              </div>
              <div className="flex flex-col grow border-r">
                <div className="bg-green-500 w-full h-2"></div>
                <button className="grow">EASY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
