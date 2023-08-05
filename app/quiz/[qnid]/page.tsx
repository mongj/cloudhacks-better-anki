export default function QnPage({ params }: { params: { qnid: string } }) {
    return <main>
        <span>{params.qnid}</span>
    </main>
}

