import ListItem from "../../components/ui/ListItem";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div>

      </div>
      <section className="w-full flex flex-col justify-start">
        <div>
          <span>Quizzes</span>
          <div>
            <span>familiarty</span>
          </div>
        </div>
        <ListItem text="中学华文" time="2days ago" icon="bg-amber-200"/>
      </section>

    </main>
  );
}
