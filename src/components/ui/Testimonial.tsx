import React from "react";
import Image from "next/image";

export default function Testimonial() {
  return (
      <figure className="mx-auto">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 text-balance max-w-2xl mx-auto">
          <p>
            “Thanks to this robust database solution, our organization has
            streamlined data management processes, leading to increased
            efficiency and accuracy in our operations.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center justify-center gap-x-5">
          <Image
            className="h-11 w-11 rounded-full object-cover shadow-lg shadow-indigo-500/50 ring-2 ring-white"
            width={200}
            height={200}
            src="/images/testimonial.jpg"
            alt="Image of Dima Coil"
          />
          <div>
            <p className="font-semibold text-gray-900">Dima Coil</p>
            <p className="text-sm text-gray-600">CEO Hornertools</p>
          </div>
        </figcaption>
      </figure>
  );
}
