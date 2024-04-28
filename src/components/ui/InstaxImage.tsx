"use client";
import { cx } from "@/lib/utils";
import Image from "next/image";
import { nanum } from "@/lib/nanum";

export function InstaxImage({
  className,
  src,
  width,
  height,
  alt,
  caption,
}: {
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure
      className={cx(
        "h-fit rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/20 overflow-hidden shadow-xl shadow-black/25 dark:shadow-indigo-500/5 hover:-translate-y-0.5 hover:shadow-black/40 dark:hover:shadow-indigo-500/10 transition",
        className
      )}
    >
      <div className="px-2 pt-2 pb-4 bg-gray-50 dark:bg-gray-900">
        <div className="relative rounded overflow-hidden">
          <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
      </div>
      <div
        className={cx(
          nanum.className,
          "text-xl text-gray-700 dark:text-gray-300 px-2 pt-2 pb-1"
        )}
      >
        <figcaption>{caption}</figcaption>
      </div>
    </figure>
  );
}
