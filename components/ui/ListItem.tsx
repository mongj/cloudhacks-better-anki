import Image from "next/image";
import Link from "next/link";

export default function ListItem(props: {
  text: string;
  time: string;
  icon: string;
  href: string;
}) {
  return (
    <Link href={props.href}>
      <div className="flex-row flex justify-between px-4 py-6 rounded-3xl shadow-sm border-neutral-200 border-solid border bg-white">
        <span>{props.text}</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm text-stone-500 ">{props.time}</span>
          <span
            className={`rounded-full aspect-square h-3 ${props.icon} inline-block`}
          ></span>
        </div>
      </div>
    </Link>
  );
}
