import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { RiPlayCircleFill } from "@remixicon/react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="flex flex-col mt-40 justify-center items-center text-center">
      <h1 className="text-7xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-zinc-900 to-zinc-700 p-2 animate-slide-up-fade" style={{animationDuration: "700ms"}}>
        The database for <br /> modern applications
      </h1>
      <p className="font-medium mt-6 max-w-sm animate-slide-up-fade" style={{animationDuration: "900ms"}}>
      Database is a general purpose, relational database built for modern application developers and for the cloud era. No database makes you more productive.
      </p>
      <div className="flex gap-3 mt-6 animate-slide-up-fade" style={{animationDuration: "1100ms"}}>
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
      <div className="relative max-w-6xl mt-16 h-[30rem] overflow-hidden animate-slide-up-fade" style={{animationDuration: "1400ms"}}>
      <HeroImage />
        <div className="absolute bg-gradient-to-b from-transparent to-white bottom-0 w-full h-2/3"></div>
      </div>
    </section>
  );
}
