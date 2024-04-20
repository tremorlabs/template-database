"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

export default function CodeExampleTabs() {
  return (
    <Tabs.Root className="" defaultValue="tab1">
      <Tabs.List className="shrink-0 flex" aria-label="Manage your account">
        <Tabs.Trigger
          className="flex-1 flex items-center justify-center select-none rounded-xl data-[state=active]:text-rose-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab1"
        ></Tabs.Trigger>
        <Tabs.Trigger
          className="flex-1 flex items-center justify-center select-none rounded-xl data-[state=active]:text-rose-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab2"
        >
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      ></Tabs.Content>
      <Tabs.Content
        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      ></Tabs.Content>
    </Tabs.Root>
  );
}
