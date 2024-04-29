import { Button } from "@/components/Button";
import { nanum } from "@/lib/nanum";
import { cx } from "@/lib/utils";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { InstaxImage } from "@/components/ui/InstaxImage";

const benefits = [
  {
    title: "Work in Zurich",
    description:
      "We are in-person first and have a fantastic office in Zurich.",
  },
  {
    title: "Competitive salary & equity",
    description:
      "We pay competitive salary and option packages to attract the very best talent.",
  },
  {
    title: "Health, dental, vision",
    description:
      "Database pays all of your health, dental, and vision insurance.",
  },
  {
    title: "Yearly off-sites",
    description:
      "We bring everyone together at an interesting location to discuss the big picture.",
  },
  {
    title: "Book budget",
    description:
      "We provide every employee with a 350 dollar budget for books.",
  },
  {
    title: "Tasty snacks",
    description:
      "The fridge and pantry are stocked + free dinner catered every night (incl. weekends).",
  },
  {
    title: "20 PTO days per year",
    description: "Take time off to recharge and come back refreshed.",
  },
  {
    title: "Spotify Premium",
    description:
      "We really have the best fringe benefits, even a Spotify subscription is included.",
  },
];

export default function About() {
  return (
    <div className="mt-44 flex flex-col justify-center items-center px-3 overflow-hidden">
      <section aria-labelledby="about-overview">
        <h1
          id="about-overview"
          className="text-4xl md:text-6xl tracking-tight font-bold text-center max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-800 py-2 animate-slide-up-fade dark:from-gray-50 dark:to-gray-300"
          style={{
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          {/* @SEV: text-balance sometimes used via tailwind */}
          <Balancer>
            We are engineers, building the database platform we always wanted
          </Balancer>
        </h1>
        <div
          className="relative p-6 sm:p-12 mt-20 max-w-lg mx-auto bg-gray-50/20 dark:bg-gray-900/40 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-600/10 animate-slide-up-fade"
          style={{
            animationDuration: "600ms",
            animationDelay: "400ms",
            animationFillMode: "backwards",
          }}
        >
          <div className="absolute -inset-y-8 left-0 w-px bg-gray-600/20 dark:bg-gray-700/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-y-8 right-0 w-px bg-gray-600/20 dark:bg-gray-700/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-x-8 top-0 h-px bg-gray-600/20 dark:bg-gray-700/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-x-8 bottom-0 h-px bg-gray-600/20 dark:bg-gray-700/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute top-0 left-[0.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 dark:ring-white/5 shadow shadow-indigo-500/40 dark:shadow-indigo-600/30 bg-white dark:bg-gray-950"></div>
          <div className="absolute top-0 right-[0.5px] translate-x-1/2 -translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 dark:ring-white/5 shadow shadow-indigo-500/40 dark:shadow-indigo-600/30 bg-white dark:bg-gray-950"></div>
          <div className="absolute bottom-0 right-[0.5px] translate-x-1/2 translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 dark:ring-white/5 shadow shadow-indigo-500/40 dark:shadow-indigo-600/30 bg-white dark:bg-gray-950"></div>
          <div className="absolute bottom-0 left-[0.5px] -translate-x-1/2 translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 dark:ring-white/5 shadow shadow-indigo-500/40 dark:shadow-indigo-600/30 bg-white dark:bg-gray-950"></div>
          <div className="font-medium text-lg text-center">
            <p className=" text-gray-900 dark:text-gray-50">
              Data is changing every aspect of running a business, and it is
              happening now.{" "}
            </p>
            <p className="text-gray-900 dark:text-gray-50 mt-6">
              Database is at the core of this revolution.
            </p>
          </div>
        </div>
      </section>
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
      <section aria-labelledby="benefits-title" className="mt-44">
        <h2
          id="benefits-title"
          className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-300 py-2"
        >
          What&apos;s in for you
        </h2>
        <dl className="grid grid-cols-4 gap-x-10 gap-y-20 mt-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="col-span-4 sm:col-span-2 lg:col-span-1"
            >
              <dt className="font-semibold text-gray-900 dark:text-gray-50">
                {benefit.title}
              </dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="vision-title" className="mt-32">
        <h2
          id="vision-title"
          className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-300 p-2"
        >
          Our Vision
        </h2>
        <div className="px-2 max-w-prose space-y-4 mt-6 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We envision a world where data management is no longer a complex
            challenge but a powerful advantage. By integrating cutting-edge AI
            into database solutions, we aim to transform raw data into strategic
            assets, empowering businesses to innovate faster and more
            efficiently.
          </p>
          <p className="text-lg leading-8">
            We believe in removing the barriers of data complexity and
            scalability, enabling teams to focus on insights and innovations
            rather than maintenance and management. Our goal is to equip every
            organization with the tools they need to harness the full potential
            of their data, driving growth and excellence in every interaction.
          </p>
          <p
            className={cx(
              nanum.className,
              "w-fit rotate-3 text-indigo-600 dakr:text-indigo-400 text-3xl"
            )}
          >
            – Alex and Robin
          </p>
        </div>
        <Button className="mt-32 shadow-xl shadow-indigo-500/20 w-full h-10">
          View Open Roles
        </Button>
      </section>
    </div>
  );
}
