import React from "react";
import { Logos } from "./Logos";

export default function LogoCloud() {
  return (
    <section className="flex flex-col gap-y-6 mt-40 justify-center items-center text-center">
      <p className="tracking-tighter font-medium text-gray-800">
        Relied on by the world&apos;s best engineering teams
      </p>
      <div className="grid grid-cols-4 gap-x-20 gap-y-4">
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
