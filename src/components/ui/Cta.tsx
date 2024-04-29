"use client";
import Balancer from "react-wrap-balancer";
import { Button } from "../Button";
import { Input } from "../Input";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mb-20 mt-32 sm:mt-40 p-1 max-w-6xl mx-auto px-2"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask absolute -z-10 opacity-70 select-none pointer-events-none"
          aria-hidden="true"
        >
          <div className="size-full flex flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="size-full flex gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="rounded-md size-5 ring-1 ring-black/5 dark:ring-white/5 shadow shadow-indigo-500/20 dark:shadow-indigo-500/20"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="text-4xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-300 p-2"
              >
                Ready to get started?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl sm:mt-6 sm:text-lg text-gray-600 dark:text-gray-400">
                
                <Balancer>
                  Launch a new cluster or migrate to Database with zero downtime.
                  </Balancer>
              </p>
            </div>
            <div className="p-1.5 ring-1 ring-black/[3%] dark:ring-white/[3%] rounded-[16px] mt-14 bg-gray-300/5 dark:bg-gray-900/10 backdrop-blur w-full">
              <div className="p-4 bg-white dark:bg-gray-950 rounded-xl ring-1 ring-black/5 dark:ring-white/5 shadow-lg shadow-indigo-500/10 dark:shadow-indigo-500/10">
                <form
                  className="flex flex-col sm:flex-row items-center gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    id="email"
                    className="h-10 min-w-0 flex-auto w-full"
                    inputClassName="h-full"
                    placeholder="Your Work Email "
                  />
                  <Button
                    className="h-10 w-full sm:w-fit sm:flex-none"
                    type="submit"
                    variant="primary"
                  >
                    Get started
                  </Button>
                </form>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-4">
              Not sure where to start?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                Talk to sales
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
