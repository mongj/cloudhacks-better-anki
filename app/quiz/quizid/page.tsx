

import { quizzes } from "../page"

export default function QuizPage({ params }: { params: { quizid: string } }) {
    console.log(Number(params.quizid))
    return <section className="z-10">
        <button>
            back
        </button>
        <span>{quizzes[Number(params.quizid)]}</span>
        <div>

        </div>
    </section>
}

