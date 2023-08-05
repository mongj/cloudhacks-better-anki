

const quizzes = ["中学普通华文"]

export default function QuizPage({ params }: { params: { quizid: string } }) {
    console.log(Number(params.quizid))
    return <main>
        <span>{quizzes[Number(params.quizid)]}</span>
    </main>
}

