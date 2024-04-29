import React from "react";
import { InstaxImage } from "./InstaxImage";
import Image from "next/image";

export default function TeamGallery() {
  return (
    <section
      aria-labelledby="teamwork-title"
      className="max-w-4xl mt-32 animate-slide-up-fade"
      style={{
        animationDuration: "600ms",
        animationDelay: "900ms",
        animationFillMode: "backwards",
      }}
    >
      <h2
        id="teamwork-title"
        className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-800 p-2 dark:from-gray-50 dark:to-gray-300"
      >
        Teamwork at Database
      </h2>
      <figure className="mt-8">
        <div className="rounded-2xl bg-gray-50/40 dark:bg-gray-900/80 p-2 ring-1 ring-inset ring-black/5 dark:ring-white/10">
          <div className="rounded-xl shadow-xl shadow-indigo-600/20 ring-1 ring-black/20 dark:ring-white/20 dark:shadow-indigo-600/30 overflow-hidden">
            <Image
              src="/images/founders.jpg"
              alt="App screenshot"
              width={1819}
              height={998}
            />
          </div>
        </div>
        <figcaption className="text-center mt-2 text-sm text-gray-400">
          Join Database, be yourself.
        </figcaption>
      </figure>

      <div className="mt-20">
        <div className="flex flex-col md:flex-row w-full justify-between items-center">
          <InstaxImage
            className="w-[25rem] -rotate-6 -ml-10"
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
            className="w-[15rem] rotate-1 -mr-10"
            src="/images/home.jpg"
            alt="Picture of the Fraumunster Zurich"
            width={640}
            height={960}
            caption="Home sweet home"
          />
        </div>
        <div className="md:flex gap-4 w-full justify-between hidden mt-8">
          <InstaxImage
            className="w-[25rem] rotate-1 -ml-16"
            src="/images/break.jpg"
            alt="Team having a break in the lunch room"
            width={640}
            height={360}
            caption="Sometimes we take a break"
          />
          <InstaxImage
            className="w-[15rem] -rotate-3 -mt-10"
            src="/images/cool.jpg"
            alt="Personw with headphones"
            width={640}
            height={965}
            caption="Robin handels the playlist"
          />
          <InstaxImage
            className="w-[30rem] rotate-[8deg] -mt-2 -mr-20"
            src="/images/release.jpg"
            alt="Picture of a party with confetti"
            width={1920}
            height={1281}
            caption="v1.0 Release party. Our US intern, Mike, had his first alocolh-free beer"
          />
        </div>
      </div>
    </section>
  );
}
