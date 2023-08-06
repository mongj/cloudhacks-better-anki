import Image from "next/image";
import Link from "next/link";

export default function ListItem(props: { text: string, time: string, icon: string }) {
    return <Link href="/quiz/0" >
        <div className="flex-row flex justify-between px-4 py-4 rounded-md shadow-md">
            <span>
                {props.text}
            </span>
            <div className="flex flex-row gap-2 items-center">
                <span className="text-sm text-stone-500 ">{props.time}</span>
                <span className="rounded-full aspect-square h-3 bg-amber-300 inline-block"></span>
            </div>
        </div>
    </Link>

}