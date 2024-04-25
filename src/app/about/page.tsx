import { Button } from "@/components/Button";
import { nanum } from "@/lib/nanum";
import { cx } from "@/lib/utils";
import Image from "next/image";
export default function About() {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <section>
        <h1 className="text-4xl md:text-6xl tracking-tight font-bold text-center max-w-4xl mx-auto">
          <span
            className="block animate-slide-up-fade text-transparent bg-clip-text py-2 -my-2 bg-gradient-to-r from-gray-900 to-gray-700"
            style={{
              animationDuration: "250ms",
              animationDelay: "400ms",
              animationFillMode: "backwards",
            }}
          >
            We are engineers, building{" "}
          </span>
          <span
            className="block animate-slide-up-fade text-transparent bg-clip-text py-2 -my-2 bg-gradient-to-r from-gray-900 to-gray-700"
            style={{
              animationDuration: "450ms",
              animationDelay: "500ms",
              animationFillMode: "backwards",
            }}
          >
            the database platform{" "}
          </span>
          <span
            className="block animate-slide-up-fade text-transparent bg-clip-text py-2 -my-2 bg-gradient-to-r from-gray-900 to-gray-700"
            style={{
              animationDuration: "650ms",
              animationDelay: "600ms",
              animationFillMode: "backwards",
            }}
          >
            we always wanted
          </span>
        </h1>
        <div className="relative p-12 mt-20 max-w-lg mx-auto bg-gray-50/20 shadow-xl shadow-indigo-500/10 animate-slide-up-fade"
        style={{
          animationDuration: "900ms",
          animationDelay: "900ms",
          animationFillMode: "backwards",
        }}>
          <div className="absolute -inset-y-8 left-0 w-px bg-gray-600/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-y-8 right-0 w-px bg-gray-600/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-x-8 top-0 h-px bg-gray-600/20 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute -inset-x-8 bottom-0 h-px bg-gray-600/20 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-2.5rem),transparent)]"></div>
          <div className="absolute top-0 left-[0.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 shadow shadow-indigo-500/40 bg-white"></div>
          <div className="absolute top-0 right-[0.5px] translate-x-1/2 -translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 shadow shadow-indigo-500/40 bg-white"></div>
          <div className="absolute bottom-0 right-[0.5px] translate-x-1/2 translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 shadow shadow-indigo-500/40 bg-white"></div>
          <div className="absolute bottom-0 left-[0.5px] -translate-x-1/2 translate-y-1/2 rounded-sm size-2.5 ring-1 ring-black/5 shadow shadow-indigo-500/40 bg-white"></div>
          <div className="font-medium text-lg text-center">
            <p className=" text-gray-500">
              Data is changing every aspect of running a business, and it is
              happening now.{" "}
            </p>
            <p className="text-gray-900 mt-6">
              Database is at the core of this revolution.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mt-32 animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationDelay: "1300ms",
          animationFillMode: "backwards",
        }}>
        <h2 className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 p-2">
          Teamwork at Database
        </h2>
        <figure className="relative flow-root mt-2">
          <div className="relative rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50">
            <div className="rounded-xl bg-white shadow-xl shadow-indigo-500/10 ring-1 ring-slate-900/5 overflow-hidden">
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

        <div className="mb-44 mt-20">
          <div className="flex flex-col md:flex-row w-full justify-between items-center">
            <div className="h-fit rounded-lg bg-white w-[25rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition -rotate-6 -ml-10">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/working1.jpg"
                    alt="A scenic view"
                    width={640}
                    height={427}
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-xl text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>At Database we use computers</p>
              </div>
            </div>
            <div className="h-fit rounded-lg bg-white w-[15rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition rotate-3">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/workplace.jpg"
                    alt="A scenic view"
                    width={640}
                    height={853}
                    className=""
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-xl text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>Our phone booths are nuts</p>
              </div>
            </div>
            <div className="h-fit rounded-lg bg-white w-[15rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition rotate-1 -mr-10">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/home.jpg"
                    alt="A scenic view"
                    width={640}
                    height={960}
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-2xl text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>Home sweet home</p>
              </div>
            </div>
          </div>
          <div className="md:flex gap-4 w-full justify-between hidden mt-8">
            <div className="h-fit rounded-lg bg-white w-[25rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition -rotate-1 -ml-2">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/break.jpg"
                    alt="A scenic view"
                    width={640}
                    height={360}
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-xl text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>Sometimes we take a break</p>
              </div>
            </div>
            <div className="h-fit rounded-lg bg-white w-[15rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition -rotate-3 -mt-10">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/cool.jpg"
                    alt="A scenic view"
                    width={640}
                    height={965}
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-xl text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>Robin handels the playlist</p>
              </div>
            </div>
            <div className="h-fit rounded-lg bg-white w-[30rem] ring-1 ring-black/5 overflow-hidden shadow-xl shadow-black/25 hover:-translate-y-0.5 hover:shadow-black/40 transition rotate-12 -mr-20 mt-8">
              <div className="px-2 pt-2 pb-4 bg-gray-50">
                <div className="relative rounded overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0px_0px_3px_0px_rgb(0,0,0,1)]"></div>
                  <Image
                    src="/images/release.jpg"
                    alt="A scenic view"
                    width={1920}
                    height={1281}
                  />
                </div>
              </div>
              <div
                className={cx(
                  nanum.className,
                  "text-xl text-center text-gray-700 px-2 pt-2 pb-1"
                )}
              >
                <p>v1.0 Release party</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 py-2">
          What&apos;s in for you
        </h2>
        <div className="grid grid-cols-4 gap-x-8 gap-y-6 mt-8">
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">Work in ZRH</span>
              <p className="text-gray-500">
                We are in-person first and have a fantastic office in Zurich.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">
                Competitive Salary & Equity
              </span>
              <p className="text-gray-500">
                We pay competitive salary and option packages to attract and
                retain the very best talent.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">
                Health, Dental, Vision
              </span>
              <p className="text-gray-500">
                Database pays all of your health, dental, and vision insurance.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">
                Yearly Off-sites
              </span>
              <p className="text-gray-500">
                Once per year, we bring everyone together at an interesting
                location to discuss the big picture.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">Book budget</span>
              <p className="text-gray-500">
                We provide every employee with a 350 dollar budget for books.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">Tasty Snacks</span>
              <p className="text-gray-500">
                The fridge and pantry are stocked + free dinner catered every
                night (incl. weekends).
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">
                Unlimited Sick Days
              </span>
              <p className="text-gray-500">
                Take the time you need to rest, recover, and get back on track.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
            <div className="mr-3 space-y-1">
              <span className="font-medium text-gray-900">
                20 PTO Days per Year
              </span>
              <p className="text-gray-500">
                Take time off to recharge and come back refreshed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-32">
        <h2 className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 p-2">
          Our Vision
        </h2>
        <div className="px-2 max-w-prose space-y-4 mt-6">
          <p className="text-gray-700 text-lg/8">
            We envision a world where data management is no longer a complex
            challenge but a powerful advantage. By integrating cutting-edge AI
            into database solutions, we aim to transform raw data into strategic
            assets, empowering businesses to innovate faster and more
            efficiently.
          </p>
          <p className="text-gray-700 text-lg/8">
            We believe in removing the barriers of data complexity and
            scalability, enabling teams to focus on insights and innovations
            rather than maintenance and management. Our goal is to equip every
            organization with the tools they need to harness the full potential
            of their data, driving growth and excellence in every interaction.
          </p>
          <p
            className={cx(
              nanum.className,
              "w-fit rotate-3 text-indigo-600 text-3xl"
            )}
          >
            – Alex and Robin
          </p>
        </div>
      </section>
      <section className="mt-32">
        <Button className="shadow-xl shadow-indigo-500/20 w-full">View Open Roles</Button>
      </section>
    </div>
  );
}
