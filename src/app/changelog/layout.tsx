export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-3xl mx-auto mt-36">
      <h1 className="text-4xl font-semibold text-center">Changelog</h1>
      <div className="mt-28">
        {children}
      </div>
    </main>
  );
};
