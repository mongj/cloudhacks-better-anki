"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
export default function McqForm({
  word,
  false_options,
}: {
  word: string;
  false_options: string[];
}) {
  const [num, setNum] = useState<number>(-1);
  return (
    <RadioGroup className="w-3/4">
      <div
        className={`flex items-center space-x-2 p-3 border-2 w-3/4 ${
          num == 1 && `bg-red-300`
        }`}
      >
        <RadioGroupItem
          value={false_options[0]}
          id={false_options[0]}
          onClick={() => setNum(1)}
        />
        <Label htmlFor={false_options[0]}>{false_options[0]}</Label>
      </div>
      <div
        className={`flex items-center space-x-2 p-3 border-2 w-3/4 ${
          num == 2 && `bg-red-300`
        }`}
      >
        <RadioGroupItem
          value={false_options[1]}
          id={false_options[1]}
          onClick={() => setNum(2)}
        />
        <Label htmlFor={false_options[1]}>{false_options[1]}</Label>
      </div>
      <div
        className={`flex items-center space-x-2 p-3 border-2 w-3/4 ${
          num == 3 && `bg-green-300`
        }`}
      >
        <RadioGroupItem value={word} id={word} onClick={() => setNum(3)} />
        <Label htmlFor={word}>{word}</Label>
      </div>
      <div
        className={`flex items-center space-x-2 p-3 border-2 w-3/4 ${
          num == 4 && `bg-red-300`
        }`}
      >
        <RadioGroupItem
          value={false_options[2]}
          id={false_options[2]}
          onClick={() => setNum(4)}
        />
        <Label htmlFor={false_options[2]}>{false_options[2]}</Label>
      </div>
    </RadioGroup>
  );
}
