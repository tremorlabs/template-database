"use client";
import { Button } from "../Button";
import { Input } from "../Input";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mb-20 mt-32 sm:mt-40 overflow-hidden p-1 max-w-6xl mx-auto px-2"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="w-full mask opacity-70 select-none pointer-events-none"
          aria-hidden="true"
        >
          <div className="size-full flex flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="size-full flex gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="rounded-md size-5 ring-1 ring-black/5 shadow shadow-indigo-500/20"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4l absolute">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="">
              <h3
                id="cta-title"
                className="text-4xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-700 p-2"
              >
                Ready to get started?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-slate-00 sm:mt-6 sm:text-lg text-balance text-gray-700">
                Launch a new cluster or migrate to Database with zero downtime.
              </p>
            </div>
            <div className="p-1.5 ring-1 ring-black/[3%] rounded-[16px] mt-14 bg-gray-300/5 backdrop-blur w-full">
              <div className="p-4 bg-white rounded-xl ring-1 ring-black/5 shadow-lg shadow-indigo-500/10">
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
            <p className="text-gray-400 text-sm sm:text-xs mt-4">
              Not sure where to start?{" "}
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Book a guided onboarding
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
