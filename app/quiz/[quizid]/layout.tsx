export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>

            <main className="relative">
                <div className="w-full h-72 bg-purple-400 rounded-b-xl absolute z-0"></div>
                <div className="z-10">{children}</div>
            </main>
        </>
    );
}