import React from "react";
import { Button } from "../Button";

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mt-44 px-2 max-w-6xl mx-auto w-full"
    >
      <div className="w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-200/20 bg-indigo-50/50 tracking-tighter leading-4 z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-indigo-600">
          Security at Scale
        </span>
      </div>
      <h2
        id="features-title"
        className="mt-2 text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2"
      >
        Architected for speed and reliability
      </h2>
      <div className="flex flex-col items-center md:flex-row border-b border-t border-gray-100 justify-between p-6 mt-6">
        <div className="space-y-1">
          <span className="text-5xl font-semibold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600">
            +162%
          </span>
          <p className="text-gray-700">Bandwith increase</p>
        </div>
        <div className="h-px my-6 md:my-0 md:h-16 md:w-px md:mx-6 bg-gray-100" />
        <div className="space-y-1">
          <span className="text-5xl font-semibold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600">
            2-3x
          </span>
          <p className="text-gray-700">Better storage efficiency</p>
        </div>
        <div className="h-px my-6 md:my-0 md:h-16 md:w-px md:mx-6 bg-gray-100" />
        <div className="space-y-1">
          <span className="text-5xl font-semibold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600">
            Up to 9M
          </span>
          <p className="text-gray-700">Rows ingested / second</p>
        </div>
      </div>
      <p className="mt-6 text-lg max-w-3xl text-gray-700">
        Database&apos; innovative architecture avoids the central bottlenecks of
        traditional systems, enhancing system reliability. This design ensures
        high productivity and security, minimizing the risk of service
        disruptions and outages.
      </p>
      <Button className="mt-8" variant="secondary">
        Explore Security
      </Button>
    </section>
  );
}
