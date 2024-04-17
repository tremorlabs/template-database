"use client";

import Link from "next/link";
import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { siteConfig } from "@/app/siteConfig";
import { Button } from "../Button";
import Ycompany from "../../../public/Ycompany";

export function Navigation() {
  const scrolled = useScroll(30);

  return (
    <header
      className={cx(
        "fixed top-4 inset-x-3 rounded-xl mx-auto max-w-6xl flex justify-center z-10 transition-all duration-500 h-14 border border-transparent ease-[cubic-bezier(0.16,1,0.3,1.03)] animate-slide-down-fade",
        scrolled
          ? "border-gray-100 bg-white/80 shadow-xl shadow-black/[2%] max-w-3xl backdrop-blur-nav"
          : "bg-white/0"
      )}
      style={{ animationDuration: "700ms" }}
    >
      <div className="flex items-center justify-between w-full pr-2 pl-3">
        <Link href="/">
          <span className="sr-only">Company logo</span>
          <Ycompany className="w-32" />
        </Link>

        <nav>
          <ul className="items-center gap-8 flex">
            <li>
              <Link href={siteConfig.baseLinks.docs}>About</Link>
            </li>
            <li>
              <Link href={siteConfig.externalLinks.raw}>Features</Link>
            </li>
            <li>
              <Link href={siteConfig.baseLinks.components}>Pricing</Link>
            </li>
            <li>
              <Link href={siteConfig.externalLinks.blocks}>Blog</Link>
            </li>
          </ul>
        </nav>
        <Button>Join</Button>
      </div>
    </header>
  );
}
