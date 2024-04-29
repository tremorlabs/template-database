import React from "react";
import { Logos } from "./Logos";

export default function LogoCloud() {
  return (
    <section
      aria-label="Company logos"
      className="flex flex-col gap-y-6 mt-24 sm:mt-32 justify-center items-center text-center animate-slide-up-fade"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="tracking-tighter text-lg font-medium text-gray-800 dark:text-gray-200">
        Trusted by the world&apos;s best engineering teams
      </p>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-x-20 gap-y-4 text-gray-900 dark:text-gray-200">
        <Logos.Biosynthesis className="w-28" />
        <Logos.AltShift className="w-28" />
        <Logos.Capsule className="w-28" />
        <Logos.Catalog className="w-28" />
        <Logos.Cloudwatch className="w-28" />
        <Logos.FocalPoint className="w-28" />
        <Logos.Interlock className="w-28" />
        <Logos.Sisyphus className="w-28" />
      </div>
    </section>
  );
}
