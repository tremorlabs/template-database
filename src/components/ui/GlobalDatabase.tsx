"use client";
import React, { useRef, useEffect, FunctionComponent } from "react";
import createGlobe from "cobe";

export const GlobalDatabase: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 4.7;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 13,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.3, 0.3],
      glowColor: [0.15, 0.15, 0.15],
      markerColor: [100, 100, 100],
      markers: [
        // { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        // { location: [40.7128, -74.006], size: 0.03 }, // New York City
        // { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo
        // { location: [28.7041, 77.1025], size: 0.03 }, // Delhi
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi;
        phi += 0.0002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="px-2">
      <section
        aria-labelledby="global-database-title"
        className="relative shadow-xl shadow-black/30 flex flex-col mt-28 md:mt-40 justify-center items-center bg-gray-950 overflow-hidden pt-24 rounded-3xl max-w-6xl w-full mx-auto"
      >
        <div className="absolute top-[17rem] md:top-[20rem] bg-indigo-800 blur-3xl rounded-full size-[40rem]" />
        <div className="inline-block px-3 uppercase border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-400/20 bg-indigo-800/20 tracking-tight leading-4 z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-indigo-400">
            Made for the cloud
          </span>
        </div>
        <h2
          id="global-database-title"
          className="mt-6 tracking-tighter text-5xl md:text-8xl font-bold text-transparent bg-clip-text inline-block from-white to-indigo-100 bg-gradient-to-b px-2 z-10 text-center"
        >
          The global <br /> cloud database
        </h2>
        <canvas
          className="absolute top-[7.1rem] md:top-[12rem] size-full aspect-square max-w-fit z-20"
          ref={canvasRef}
          style={{ width: 1200, height: 1200 }}
        />
        <div className="w-full h-[36rem] overflow-hidden -mt-32 md:-mt-36 z-20">
          <div className="absolute bottom-0 bg-gradient-to-b from-transparent via-gray-950/95 to-gray-950 w-full h-3/5" />
          <div className="absolute bottom-12 md:top-2/3 max-w-3xl m-auto inset-x-6">
            <div className="backdrop-blur grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 px-6 md:px-10 py-6 rounded-lg bg-white/[1%] border border-white/[3%] shadow-xl">
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-nowrap font-semibold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 to-indigo-500">
                  Global Clusters
                </h3>
                <p className="text-indigo-200/40 text-sm">
                  Enable low-latency access globally, enhancing application
                  performance.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-nowrap font-semibold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 to-indigo-500">
                  Serverless Triggers
                </h3>
                <p className="text-indigo-200/40 text-sm">
                  Trigger functions automatically for dynamic app behavior.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-nowrap font-semibold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 to-indigo-500">
                  Monitoring & Alerts
                </h3>
                <p className="text-indigo-200/40 text-sm">
                  Monitor health with key metrics or integrate third-party
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
