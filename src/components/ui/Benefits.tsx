import React from "react";

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

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="mt-44">
      <h2
        id="benefits-title"
        className="text-4xl md:text-5xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-300 py-2"
      >
        What&apos;s in for you
      </h2>
      <dl className="grid grid-cols-4 gap-x-10 gap-y-20 mt-20">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
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
  );
}
