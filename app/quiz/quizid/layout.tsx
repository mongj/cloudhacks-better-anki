export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative p-8">
      <div className="w-full h-72 bg-purple-400 rounded-b-3xl absolute z-0 left-0 top-0"></div>
      <div className="z-10 relative">{children}</div>
    </main>
  );
}
