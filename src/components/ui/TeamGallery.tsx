import Image from "next/image"
import { InstaxImage } from "./InstaxImage"

export default function TeamGallery() {
  return (
    <section
      aria-labelledby="teamwork-title"
      className="mt-32 max-w-4xl animate-slide-up-fade"
      style={{
        animationDuration: "600ms",
        animationDelay: "900ms",
        animationFillMode: "backwards",
      }}
    >
      <h2
        id="teamwork-title"
        className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
      >
        Teamwork at Database
      </h2>
      <figure className="mt-8">
        <div className="rounded-2xl bg-gray-50/40 p-2 ring-1 ring-inset ring-black/5 dark:bg-gray-900/80 dark:ring-white/10">
          <div className="overflow-hidden rounded-xl shadow-xl shadow-indigo-600/20 ring-1 ring-black/20 dark:shadow-indigo-600/30 dark:ring-white/20">
            <Image
              src="/images/founders.jpg"
              alt="App screenshot"
              width={1819}
              height={998}
            />
          </div>
        </div>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          Join Database, be yourself.
        </figcaption>
      </figure>

      <div className="mt-20">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <InstaxImage
            className="-ml-10 w-[25rem] -rotate-6"
            src="/images/working.jpg"
            alt="Two employees working with computers"
            width={640}
            height={427}
            caption="At Database we use computers"
          />
          <InstaxImage
            className="w-[15rem] rotate-3"
            src="/images/workplace.jpg"
            alt="Office with a phone booth"
            width={640}
            height={853}
            caption="Our phone booths are nuts"
          />
          <InstaxImage
            className="-mr-10 w-[15rem] rotate-1"
            src="/images/home.jpg"
            alt="Picture of the Fraumunster Zurich"
            width={640}
            height={960}
            caption="Home sweet home"
          />
        </div>
        <div className="mt-8 hidden w-full justify-between gap-4 md:flex">
          <InstaxImage
            className="-ml-16 w-[25rem] rotate-1"
            src="/images/break.jpg"
            alt="Team having a break in the lunch room"
            width={640}
            height={360}
            caption="Sometimes we take a break"
          />
          <InstaxImage
            className="-mt-10 w-[15rem] -rotate-3"
            src="/images/cool.jpg"
            alt="Personw with headphones"
            width={640}
            height={965}
            caption="Robin handels the playlist"
          />
          <InstaxImage
            className="-mr-20 -mt-2 w-[30rem] rotate-[8deg]"
            src="/images/release.jpg"
            alt="Picture of a party with confetti"
            width={1920}
            height={1281}
            caption="v1.0 Release party. Our US intern, Mike, had his first alocolh-free beer"
          />
        </div>
      </div>
    </section>
  )
}
