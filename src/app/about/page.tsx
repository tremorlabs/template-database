import { Button } from "@/components/Button";
import { nanum } from "@/lib/nanum";
import { cx } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Benefits from "@/components/ui/Benefits";
import TeamGallery from "@/components/ui/TeamGallery";

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
      <TeamGallery />
      <Benefits />
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
