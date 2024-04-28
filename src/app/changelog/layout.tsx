import Balancer from "react-wrap-balancer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-3xl mx-auto mt-36 px-3">
      <h1 className="text-4xl sm:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 dark:from-gray-50 dark:to-gray-300 py-2">
        Changelog
      </h1>
      <p className="text-gray-700 dark:text-gray-500 leading-7 mt-4">
        <Balancer>
          Keep yourself informed about the most recent additions and
          improvements we&apos;ve made to Database.
        </Balancer>
      </p>
      <div className="mt-28">{children}</div>
    </main>
  );
}
