"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/use-scroll"
import { cx } from "@/lib/utils"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { DatabaseLogo } from "../../../public/DatabaseLogo"
import { Button } from "../Button"

export function Navigation() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setOpen(false)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange({
      matches: mediaQuery.matches,
    } as MediaQueryListEvent)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <header
      className={cx(
        "fixed inset-x-2 top-4 z-50 mx-auto flex h-[4rem] max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true && "h-56",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Company logo</span>
            <DatabaseLogo className="w-28 md:w-32" />
          </Link>
          <nav className="absolute hidden md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <ul className="flex items-center gap-4 font-medium">
              <li>
                <Link
                  className="px-2 py-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  href={siteConfig.baseLinks.about}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  href={siteConfig.baseLinks.pricing}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 py-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                  href={siteConfig.baseLinks.changelog}
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="hidden md:flex">Book demo</Button>
          <div className="flex gap-x-2 md:hidden">
            <Button>Book demo</Button>
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.pricing}>Pricing</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Changelog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
