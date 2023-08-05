import McqForm from "../components/mcqform";
import tests from "../public/data/tests.json";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <McqForm
        word={tests[0].word}
        false_options={tests[0].false_options}
      ></McqForm>
    </main>
  );
}
