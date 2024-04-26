export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-3xl mx-auto mt-36 px-3">
      <h1 className="text-4xl sm:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 py-2">
        Changelog
      </h1>
      <p className="text-gray-700 mt-4">
        New updates and improvements to Database.
      </p>
      <div className="mt-28">{children}</div>
    </main>
  );
}
