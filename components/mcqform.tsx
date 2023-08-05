import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function McqForm({
  word,
  false_options,
}: {
  word: string;
  false_options: string[];
}) {
  return (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={false_options[0]} id={false_options[0]} />
        <Label htmlFor={false_options[0]}>{false_options[0]}</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={false_options[1]} id={false_options[1]} />
        <Label htmlFor={false_options[1]}>{false_options[1]}</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={word} id={word} />
        <Label htmlFor={word}>{word}</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={false_options[2]} id={false_options[2]} />
        <Label htmlFor={false_options[2]}>{false_options[2]}</Label>
      </div>
    </RadioGroup>
  );
}
