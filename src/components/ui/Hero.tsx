import { RiPlayCircleFill } from "@remixicon/react"
import Link from "next/link"
import { Button } from "../Button"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-gray-50 dark:to-gray-300"
        style={{ animationDuration: "700ms" }}
      >
        The database for <br /> modern applications
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
        style={{ animationDuration: "900ms" }}
      >
        Database is a general purpose, relational database built for modern
        application developers and for the cloud era.
      </p>
      <div
        className="mt-6 flex w-full animate-slide-up-fade flex-col justify-center gap-3 px-4 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-10">
          <Link href="https://cal.com">Start 14-day trial</Link>
        </Button>
        <Button
          asChild
          variant="light"
          className="group gap-x-2 bg-transparent hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
        >
          <Link
            href="https://www.youtube.com/watch?v=QRZ_l7cVzzU"
            className="ring-1 ring-gray-200 sm:ring-0 dark:ring-gray-900"
            target="_blank"
          >
            <span className=" mr-1 flex size-6 items-center justify-center rounded-full bg-gray-50 transition-all group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
              <RiPlayCircleFill
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
              />
            </span>
            Watch video
          </Link>
        </Button>
      </div>
      <div
        className="relative mx-auto ml-2 mt-16 h-fit w-[40rem] max-w-6xl animate-slide-up-fade overflow-hidden sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage />
        <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-b from-transparent to-white dark:to-gray-950"></div>
      </div>
    </section>
  )
}
