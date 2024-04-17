import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { RiPlayCircleFill } from "@remixicon/react";

export default function Hero() {
  return (
    <section className="flex flex-col mt-40 justify-center items-center text-center">
      <h1 className="text-7xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-zinc-900 to-zinc-700 p-2">
        Save time & <br /> money on AWS
      </h1>
      <p className="font-medium mt-6 max-w-sm">
        Savings, visibility, and infrastructure guardrails. One automated
        platform.
      </p>
      <div className="flex gap-3 mt-6">
        <Button asChild>
          <Link href="https://cal.com">Book an enterprise demo</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-transparent group shadow-none hover:bg-transparent"
        >
          <a href="https://www.youtube.com/watch?v=QRZ_l7cVzzU">
            <span className=" group-hover:bg-gray-200  transition-all mr-1 size-6 flex items-center justify-center rounded-full bg-gray-50">
              <RiPlayCircleFill className="size-5 text-gray-900 shrink-0" />
            </span>
            Watch video
          </a>
        </Button>
      </div>
    </section>
  );
}
