"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Arrow from "../Arrow";
import {
  RiArrowDownLine,
  RiCodeSSlashLine,
  RiShapesLine,
} from "@remixicon/react";

export default function CodeExampleTabs({
  tab1,
  tab2,
}: {
  tab1?: any;
  tab2?: any;
}) {
  return (
    <Tabs.Root
      className="grid grid-cols-12 gap-8 mt-10"
      defaultValue="tab1"
      orientation="vertical"
    >
      <Tabs.List
        className="md:order-2 col-span-full md:col-span-5 flex flex-col gap-8 w-full"
        aria-label="Select code"
      >
        <Tabs.Trigger
          className="group relative ring-1 ring-black/10 
           dark:ring-white/5 rounded-xl shadow-lg p-6 flex-1 flex flex-col items-start justify-start text-left"
          value="tab1"
        >
          <div className="group-data-[state=active]:flex hidden absolute -rotate-90 -left-[36px] top-1/2">
            <Arrow
              width={18}
              height={8}
              className="fill-gray-950 dark:fill-gray-900"
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="data-state p-2 aspect-square text-gray-700 dark:text-gray-400 group-data-[state=active]:text-indigo-600 dark:group-data-[state=active]:text-indigo-400 w-fit rounded-lg bg-white ring-1 dark:bg-gray-950 ring-black/10 dark:ring-white/10 group-data-[state=active]:shadow-md group-data-[state=active]:shadow-indigo-500/20 dark:group-data-[state=active]:shadow-indigo-600/50 transition-all">
              <RiShapesLine aria-hidden="true" className="size-5" />
            </div>
            <p className="font-semibold tracking-tight sm:text-lg transition-all text-gray-700 dark:text-gray-400  group-data-[state=active]:text-indigo-600 dark:group-data-[state=active]:text-indigo-400">
              Model everything
            </p>
          </div>
          <p className="mt-4 leading-7 text-gray-500">
            Data integrity and query efficiency for diverse data types including
            geospatial and time-series. Easy to create, effortless to maintain.
          </p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="group relative ring-1 ring-black/10 
           dark:ring-white/5 rounded-xl shadow-lg p-6 flex-1 flex flex-col items-start justify-start text-left"
          value="tab2"
        >
          <div className="sm:group-data-[state=active]:flex hidden absolute -rotate-90 -left-[36px] top-1/2">
            <Arrow
              width={18}
              height={8}
              className="fill-gray-950 dark:fill-gray-900"
            />
          </div>
          <div className="flex gap-4 items-center">
            <div className="data-state p-2 aspect-square text-gray-700 dark:text-gray-400 group-data-[state=active]:text-indigo-600 dark:group-data-[state=active]:text-indigo-400 w-fit rounded-lg bg-white ring-1 dark:bg-gray-950 ring-black/10 dark:ring-white/10 group-data-[state=active]:shadow-md group-data-[state=active]:shadow-indigo-500/20 dark:group-data-[state=active]:shadow-indigo-600/50 transition-all">
              <RiCodeSSlashLine aria-hidden="true" className="size-5" />
            </div>
            <p className="font-semibold tracking-tight sm:text-lg transition-all text-gray-700 dark:text-gray-400 group-data-[state=active]:text-indigo-600 dark:group-data-[state=active]:text-indigo-400">
              Query efficiently
            </p>
          </div>
          <p className="mt-4 leading-7 text-gray-500">
            Leverage a developer-native query API to efficiently manage
            PostgreSQL data. Initialize once, scale infinitely.
          </p>
        </Tabs.Trigger>
      </Tabs.List>
      <div className="md:col-span-7 col-span-full">
        <Tabs.Content value="tab1">
          {tab1}
        </Tabs.Content>
        <Tabs.Content value="tab2">
          {tab2}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
