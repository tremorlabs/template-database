import React from "react";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flow-root shadow-tremor">
      <div className="relative rounded-xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50">
        <div className="rounded-md bg-white shadow-3xl shadow-black/10 ring-1 ring-slate-900/5 overflow-hidden">
          <Image
            src="/images/preview.png"
            alt="App screenshot"
            width={2400}
            height={1600}
          />
        </div>
      </div>
    </div>
  );
}
