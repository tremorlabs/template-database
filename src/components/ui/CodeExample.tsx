import Code from "@/components/Code";
import { RiArrowDownLine, RiExpandDiagonalLine } from "@remixicon/react";

const code = `return (// [!code ++]
<div className="rounded-lg bg-gradient-to-r from-sky-300 to-sky-500 p-4 !pr-0 md:p-8 lg:p-12 [&>pre]:rounded-none max-w-xl">// [!code --]
  <div className="overflow-hidden rounded-s-lg">// [!code highlight]
    <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
      <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 ">
        {filename}
      </span>
    </div>
    <div
      className="border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  </div>
</div>
);
`;

export default function CodeExample() {
  return (
    <section className="mt-28 px-2 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2">
        Built by developers, <br /> for developers
      </h2>
      <p className="mt-6 text-lg max-w-2xl text-gray-700">
        Rich and expressive query language that allows you to filter and sort by
        any field, no matter how nested it may be.
      </p>
      <div className="grid grid-cols-12 gap-8 mt-10 pb-14">
        <div className="col-span-7 row-span-2">
          <Code code={code} lang="tsx" copy={true} className="h-[24rem]" />
        </div>
        <div className="border rounded-lg shadow-lg size-full p-6 col-span-5">
          <div className="flex gap-4 items-center">
            <div className="p-2 aspect-square w-fit rounded-lg bg-gray-100 border">
              <RiExpandDiagonalLine className="size-5" />
            </div>
            <p className="font-semibold">Effortless scaling</p>
          </div>
          <p className="mt-4">
            Built to handle the unpredictable nature of web traffic, scaling up
            and down as needed.
          </p>
        </div>
        <div className="border rounded-lg shadow-lg size-full p-6 col-span-5">
          <div className="flex gap-4 items-center">
            <div className="p-2 aspect-square w-fit rounded-lg bg-gray-100 border">
              <RiArrowDownLine className="size-5" />
            </div>
            <p className="font-semibold">No management required</p>
          </div>
          <p className="mt-4">
            No setup required. Spend your time building your application.
          </p>
        </div>
      </div>
    </section>
  );
}
