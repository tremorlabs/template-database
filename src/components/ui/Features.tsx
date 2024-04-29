import React from "react";
import { Badge } from "../Badge";

const stats = [
  {
    name: "Bandwith increase",
    value: "+162%",
  },
  {
    name: "Better storage efficiency",
    value: "2-3x",
  },
  {
    name: "Rows ingested / second",
    value: "Up to 9M",
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mt-44 px-2 max-w-6xl mx-auto w-full"
    >
      <Badge>Security at Scale</Badge>
      <h2
        id="features-title"
        className="mt-2 text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-800 py-2 dark:from-gray-50 dark:to-gray-300"
      >
        Architected for speed and reliability
      </h2>
      <p className="mt-6 text-lg max-w-3xl text-gray-600 dark:text-gray-400">
        Database&apos; innovative architecture avoids the central bottlenecks of
        traditional systems, enhancing system reliability. This design ensures
        high productivity and security, minimizing the risk of service
        disruptions and outages.
      </p>
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:border-y md:border-gray-200 dark:border-gray-800 md:py-14 mt-12">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="md:text-center lg:first:border-none border-l-2 md:border-l border-indigo-100 dark:border-indigo-900 lg:border-gray-200 lg:dark:border-gray-800 pl-6">
              <dd className="text-5xl lg:text-6xl tracking-tight font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 dark:from-indigo-700 dark:to-indigo-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}
