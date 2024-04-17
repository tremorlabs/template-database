"use client";
import React, { useRef, useEffect, FunctionComponent } from "react";
import createGlobe from "cobe";

export const GlobalPresence: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 5.4,
      theta: 0.1,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 3.5,
      mapBaseBrightness: 0.15,
      baseColor: [0.3, 0.3, 0.3],
      glowColor: [0.1, 0.1, 0.1],
      markerColor: [100, 100, 100],
      markers: [
        // { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        // { location: [40.7128, -74.006], size: 0.03 }, // New York City
        // { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo
        // { location: [28.7041, 77.1025], size: 0.03 }, // Delhi
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
    <section className="flex flex-col mt-40 justify-center items-center text-center bg-black overflow-hidden pt-24 rounded-3xl mx-3">
      <h2 className="tracking-tighter text-8xl font-bold text-transparent bg-clip-text inline-block from-white to-gray-200 bg-gradient-to-b px-2" >
        Global Presence
      </h2>
      <div className="relative h-[36rem] overflow-hidden -mt-36">
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent via-black/80 to-black w-full h-3/5" />
        <div className="absolute backdrop-blur top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-x-20 px-10 py-6 rounded-lg bg-white/[4%] border border-white/5 shadow-xl">
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
          style={{ width: 1200, height: 1200, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </section>
  );
};
