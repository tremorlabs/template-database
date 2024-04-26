"use client";

import Link from "next/link";
import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { siteConfig } from "@/app/siteConfig";
import { Button } from "../Button";
import { DatabaseLogo } from "../../../public/DatabaseLogo";
import { MobileNavigation } from "./MobileNavigation";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React from "react";

export function Navigation() {
  const scrolled = useScroll(15);
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cx(
        "fixed top-4 inset-x-2 rounded-xl mx-auto max-w-6xl flex justify-center z-50 transition-all h-fit border border-transparent ease-[cubic-bezier(0.16,1,0.3,1.03)] animate-slide-down-fade px-3 py-3",
        scrolled || open === true
          ? "border-gray-100 bg-white/80 shadow-xl shadow-black/[2%] max-w-3xl backdrop-blur-nav"
          : "bg-white/0",
      )}
      style={{ animationDuration: "700ms" }}
    >
      <div className="w-full my-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Company logo</span>
            <DatabaseLogo className="w-28 md:w-32" />
          </Link>
          <nav className="hidden md:flex">
            <ul className="items-center font-medium gap-4 flex">
              <li>
                <Link
                  className="hover:text-gray-900 text-gray-600 px-2 py-1"
                  href={siteConfig.baseLinks.about}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 text-gray-600 px-2 py-1"
                  href={siteConfig.baseLinks.pricing}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 text-gray-600 px-2 py-1"
                  href={siteConfig.baseLinks.changelog}
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="hidden md:flex">Join</Button>
          <div className="flex md:hidden gap-x-2">
            <Button className="">Join</Button>
            {/* <MobileNavigation /> */}
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
            >
              {open ? (
                <RiCloseLine className="size-5" />
              ) : (
                <RiMenuLine className="size-5" />
              )}
            </Button>
          </div>
        </div>
        {open ? (
          <nav className="text-lg mt-6">
            <ul className="space-y-4">
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.about} className="">
                  About
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.pricing} className="">
                  Pricing
                </Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.changelog} className="">
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
