import { Button } from "@/components/Button"
import Benefits from "@/components/ui/Benefits"
import TeamGallery from "@/components/ui/TeamGallery"
import { nanum } from "@/lib/nanum"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-44 flex flex-col items-center justify-center overflow-hidden px-3">
      <section aria-labelledby="about-overview">
        <h1
          id="about-overview"
          className="mx-auto max-w-4xl animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
          style={{
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          <Balancer>
            We are engineers, building the database platform we always wanted
          </Balancer>
        </h1>
        <div
          className="relative mx-auto mt-20 max-w-lg animate-slide-up-fade bg-gray-50/20 p-6 shadow-xl shadow-indigo-500/10 sm:p-12 dark:bg-gray-900/40 dark:shadow-indigo-600/10"
          style={{
            animationDuration: "600ms",
            animationDelay: "400ms",
            animationFillMode: "backwards",
          }}
        >
          <div className="absolute -inset-y-8 left-0 w-px bg-gray-600/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)] dark:bg-gray-700/50"></div>
          <div className="absolute -inset-y-8 right-0 w-px bg-gray-600/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)] dark:bg-gray-700/50"></div>
          <div className="absolute -inset-x-8 top-0 h-px bg-gray-600/20 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)] dark:bg-gray-700/50"></div>
          <div className="absolute -inset-x-8 bottom-0 h-px bg-gray-600/20 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)] dark:bg-gray-700/50"></div>
          <div className="absolute left-[0.5px] top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white shadow shadow-indigo-500/40 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-600/30 dark:ring-white/5"></div>
          <div className="absolute right-[0.5px] top-0 size-2.5 -translate-y-1/2 translate-x-1/2 rounded-sm bg-white shadow shadow-indigo-500/40 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-600/30 dark:ring-white/5"></div>
          <div className="absolute bottom-0 right-[0.5px] size-2.5 translate-x-1/2 translate-y-1/2 rounded-sm bg-white shadow shadow-indigo-500/40 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-600/30 dark:ring-white/5"></div>
          <div className="absolute bottom-0 left-[0.5px] size-2.5 -translate-x-1/2 translate-y-1/2 rounded-sm bg-white shadow shadow-indigo-500/40 ring-1 ring-black/5 dark:bg-gray-950 dark:shadow-indigo-600/30 dark:ring-white/5"></div>
          <div className="text-center text-lg font-medium">
            <p className=" text-gray-900 dark:text-gray-50">
              Data is changing every aspect of running a business, and it is
              happening now.{" "}
            </p>
            <p className="mt-6 text-gray-900 dark:text-gray-50">
              Database is at the core of this revolution.
            </p>
          </div>
        </div>
      </section>
      <TeamGallery />
      <Benefits />
      <section aria-labelledby="vision-title" className="mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 px-2 text-gray-600 dark:text-gray-400">
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
              "w-fit rotate-3 text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – Alex and Robin
          </p>
        </div>
        <Button className="mt-32 h-10 w-full shadow-xl shadow-indigo-500/20">
          View Open Roles
        </Button>
      </section>
    </div>
  )
}
