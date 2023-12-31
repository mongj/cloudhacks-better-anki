"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";

const radioItemStyle =
  "flex items-center space-x-2 p-3 border border-stone-400 h-16 rounded-xl";
const radioItemLabelStyle = "text-lg";

export default function McqForm({
  word,
  false_options,
  answerShowing,
}: {
  word: string;
  false_options: string[];
  answerShowing: boolean;
}) {
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState<number>(-1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <RadioGroup className=" gap-4">
      <div
        className={`${radioItemStyle} ${
          num === 1 && answerShowing ? "bg-rose-200" : ""
        }`}
      >
        <RadioGroupItem
          value={false_options[0]}
          id={false_options[0]}
          onClick={() => setNum(1)}
        />
        <Label className={`${radioItemLabelStyle} `} htmlFor={false_options[0]}>
          {false_options[0]}
        </Label>
      </div>
      <div
        className={`${radioItemStyle} ${
          num === 2 && answerShowing ? "bg-rose-200" : ""
        }`}
      >
        <RadioGroupItem
          value={false_options[1]}
          id={false_options[1]}
          onClick={() => setNum(2)}
        />
        <Label className={radioItemLabelStyle} htmlFor={false_options[1]}>
          {false_options[1]}
        </Label>
      </div>
      <div className={`${radioItemStyle} ${answerShowing && "bg-emerald-200"}`}>
        <RadioGroupItem value={word} id={word} onClick={() => setNum(3)} />
        <Label className={radioItemLabelStyle} htmlFor={word}>
          {word}
        </Label>
      </div>
      <div
        className={`${radioItemStyle} ${
          num === 4 && answerShowing ? "bg-rose-200" : ""
        }`}
      >
        <RadioGroupItem
          value={false_options[2]}
          id={false_options[2]}
          onClick={() => setNum(4)}
        />
        <Label className={radioItemLabelStyle} htmlFor={false_options[2]}>
          {false_options[2]}
        </Label>
      </div>
    </RadioGroup>
  );
}
