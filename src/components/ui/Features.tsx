import React from "react";
import { Badge } from "../Badge";

const stats = [
  {
    name: "Bandwith increase",
    value: "+162%"
  },
  {
    name: "Better storage efficiency",
    value: "2-3x"
  },
  {
    name: "Rows ingested / second",
    value: "Up to 9M"
  },
]

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
      <p className="mt-6 text-lg max-w-3xl text-gray-700 dark:text-gray-500">
        Database&apos; innovative architecture avoids the central bottlenecks of
        traditional systems, enhancing system reliability. This design ensures
        high productivity and security, minimizing the risk of service
        disruptions and outages.
      </p>
      <dl className="grid grid-cols-1 lg:grid-cols-3 border-y border-gray-100 dark:border-gray-900 px-0 py-10 mt-12">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="mx-auto">
              <dd className="text-6xl tracking-tight font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 dark:from-indigo-700 dark:to-indigo-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-700 dark:text-gray-500">{stat.name}</dt>
            </div>
            {index !== stats.length - 1 && (
              <div className="border-t border-gray-100 dark:border-gray-900 lg:border-t-0 lg:border-l lg:col-span-1 mx-auto h-0 lg:h-full w-full lg:w-px" />
            )}
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}
