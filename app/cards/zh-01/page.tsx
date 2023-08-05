import { ArrowLeft } from "lucide-react";

// export default function Page() {
//   return (
//     <>
//       <div className="bg-neutral-50 min-h-full relative">
//         <div className="bg-indigo-500 h-1/3 rounded-b-3xl absolute top-0 left-0 z-10"></div>
//         <div className="flex flex-col bg-neutral-50 p-12">
//           <ArrowLeft />
//           <h1>中学普通华文</h1>
//           <div className="bg-white">
//             <h1 className="text-5xl">神秘</h1>
//           </div>
//           <button className="bg-indigo-500 text-white">FLIP CARD</button>
//         </div>
//       </div>
//     </>
//   );
// }

export default function Page() {
  return (
    <>
      {/* <div className="bg-neutral-500 h-12 relative"></div>
      <div className="bg-indigo-500 absolute top-0 left-0 z-10 h-6"></div> */}
      <div className="relative h-full w-full">
        <div className="bg-neutral-50 h-full" />
        <div className="absolute top-0 left-0 bg-indigo-500 h-2/5 w-full rounded-b-3xl" />
        <div className="flex flex-col gap-8 absolute top-0 left-0 p-12 w-full h-full">
          <ArrowLeft color="white" size={48} />
          <h1 className="text-3xl text-white">中学普通华文</h1>
          <div className="flex flex-grow">
            <div className="front flex flex-col bg-white flex-grow rounded-2xl shadow place-content-center absolute top-0 left-0">
              <h1 className="text-7xl text-center font-bold">神秘</h1>
            </div>
            <div className="back flex flex-col bg-white flex-grow rounded-2xl shadow place-content-center absolute top-0 left-0">
              <h1 className="text-7xl text-center font-bold">神秘</h1>
            </div>
          </div>
          <button className="bg-indigo-500 text-white p-4 rounded-2xl">
            FLIP CARD
          </button>
        </div>
      </div>
    </>
  );
}
