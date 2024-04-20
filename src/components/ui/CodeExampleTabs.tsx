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
      className="grid grid-cols-12 gap-8 mt-10 pb-14 h-full"
      defaultValue="tab1"
      orientation="vertical"
    >
      <Tabs.List
        className="md:order-2 col-span-full md:col-span-5 flex flex-col gap-8 w-full"
        aria-label="Select code"
      >
        <Tabs.Trigger
          className="group relative border rounded-xl shadow-lg p-6 flex-1 flex flex-col items-start justify-start text-left"
          value="tab1"
        >
          <div className="group-data-[state=active]:flex hidden absolute -rotate-90 -left-10 top-1/2">
            <Arrow width={20} height={10} className="fill-gray-900" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="data-state p-2 aspect-square group-data-[state=active]:text-indigo-600 w-fit rounded-lg bg-gray-50 ring-1 ring-black/10 group-data-[state=active]:shadow-md group-data-[state=active]:shadow-indigo-500/20 transition-all">
              <RiShapesLine className="size-5" />
            </div>
            <p className="font-semibold tracking-tight sm:text-lg transition-all group-data-[state=active]:text-indigo-600">
              Model everything
            </p>
          </div>
          <p className="mt-4 text-gray-500">
            Data integrity and query efficiency for diverse data types including
            geospatial and time-series.
          </p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="group relative border rounded-xl shadow-lg p-6 flex-1 flex flex-col items-start justify-start text-left"
          value="tab2"
        >
          <div className="sm:group-data-[state=active]:flex hidden absolute -rotate-90 -left-10 top-1/2">
            <Arrow width={20} height={10} className="fill-gray-900" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="data-state p-2 aspect-square group-data-[state=active]:text-indigo-600 w-fit rounded-lg bg-gray-50 ring-1 ring-black/10 group-data-[state=active]:shadow-md group-data-[state=active]:shadow-indigo-500/20 transition-all">
              <RiCodeSSlashLine className="size-5" />
            </div>
            <p className="font-semibold tracking-tight sm:text-lg transition-all group-data-[state=active]:text-indigo-600">
              Query efficiently
            </p>
          </div>
          <p className="mt-4 text-gray-500">
            Leverage a developer-native query API to efficiently manage
            PostgreSQL data.
          </p>
        </Tabs.Trigger>
      </Tabs.List>
      <div className="md:col-span-7 col-span-full">
        <Tabs.Content className="" value="tab1">
          {tab1}
        </Tabs.Content>
        <Tabs.Content className="" value="tab2">
          {tab2}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
