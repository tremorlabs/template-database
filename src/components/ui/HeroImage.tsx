"use client"

import ThemedImage from "./ThemedImage"

export default function HeroImage() {
  return (
    <section
      aria-label="Hero Image of the website"
      className="relative flow-root"
    >
      <div className="relative rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
        <div className="shadow-3xl overflow-hidden rounded-xl bg-white shadow-black/10 ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <ThemedImage
            lightSrc="/images/hero-light.png"
            darkSrc="/images/hero-dark.png"
            alt="A preview of the Database web app"
            width={2400}
            height={1600}
          />
        </div>
      </div>
    </section>
  )
}
