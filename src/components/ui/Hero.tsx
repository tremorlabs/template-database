import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { RiPlayCircleFill } from "@remixicon/react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex flex-col mt-32 sm:mt-40 justify-center items-center text-center"
    >
      <h1
        id="hero-title"
        className="text-4xl sm:text-6xl md:text-7xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-300 p-2 animate-slide-up-fade"
        style={{ animationDuration: "700ms" }}
      >
        The database for <br /> modern applications
      </h1>
      <p
        className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-lg animate-slide-up-fade"
        style={{ animationDuration: "900ms" }}
      >
        Database is a general purpose, relational database built for modern
        application developers and for the cloud era.
      </p>
      <div
        className="flex flex-col sm:flex-row gap-3 mt-6 animate-slide-up-fade justify-center w-full px-4"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-10">
          <Link href="https://cal.com">Start 14-day trial</Link>
        </Button>
        <Button
          asChild
          variant="light"
          className="bg-transparent dark:bg-transparent hover:dark:bg-transparent hover:bg-transparent gap-x-2 group"
        >
          <Link
            href="https://www.youtube.com/watch?v=QRZ_l7cVzzU"
            className="sm:ring-0 ring-1 ring-gray-200 dark:ring-gray-900"
            target="_blank"
          >
            <span className=" group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all mr-1 size-6 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800">
              <RiPlayCircleFill
                aria-hidden="true"
                className="size-5 text-gray-900 dark:text-gray-50 shrink-0"
              />
            </span>
            Watch video
          </Link>
        </Button>
      </div>
      <div
        className="relative max-w-6xl mt-16 h-fit overflow-hidden animate-slide-up-fade mx-auto ml-2 sm:px-2 sm:ml-auto sm:w-full w-[40rem]"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage />
        <div className="absolute bg-gradient-to-b from-transparent to-white dark:to-gray-950 bottom-0 w-full h-2/3"></div>
      </div>
    </section>
  );
}
