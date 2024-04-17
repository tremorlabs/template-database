"use client";
import React, { useRef, useEffect, FunctionComponent } from "react";
import createGlobe from "cobe";

export const GlobalPresence: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 900 * 2,
      height: 900 * 2,
      phi: 5.4,
      theta: 0.15,
      dark: 1,
      diffuse: 1.65,
      mapSamples: 16000,
      mapBrightness: 3.9,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0, 0],
      markers: [
        // { location: [37.7595, -122.4367], size: 0.03 },
        // { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi;
        phi += 0.0005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col mt-40 justify-center items-center text-center bg-black overflow-hidden pt-28">
      <h2 className="tracking-tighter text-gray-50 text-8xl font-bold">
        Global Presence
      </h2>
      <div className="relative h-[40rem] overflow-hidden -mt-28">
      <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-full h-3/5" />
        <div className="absolute backdrop-blur-[8px] top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-x-20 bg-black/[2%] px-10 py-6 rounded-lg border border-white/5">
          <div className="flex flex-col gap-2">
            <p className="text-indigo-500 font-bold text-3xl">15B</p>
            <p className="whitespace-nowrap text-indigo-100">Reads per week</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-indigo-500 font-bold text-3xl">15B</p>
            <p className="whitespace-nowrap text-indigo-100">Reads per week</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-indigo-500 font-bold text-3xl">15B</p>
            <p className="whitespace-nowrap text-indigo-100">Reads per week</p>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          style={{ width: 900, height: 900, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </section>
  );
};
