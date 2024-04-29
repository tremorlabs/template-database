import React from "react";
import { DatabaseLogo } from "../../../public/DatabaseLogo";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import ThemeSwitch from "../ThemeSwitch";

const navigation = {
  product: [
    { name: "Enterprise", href: "#", external: false },
    { name: "Pricing", href: "#", external: false },
    { name: "Docs", href: "#", external: false },
  ],
  resources: [
    { name: "FAQs", href: "#", external: false },
    { name: "GitHub", href: "#", external: true },
    { name: "Discord", href: "#", external: true },
  ],
  company: [
    { name: "About", href: "#", external: false },
    { name: "Careers", href: "#", external: true },
    { name: "Contact", href: "#", external: false },
  ],
  legal: [
    { name: "Imprint", href: "#", external: false },
    { name: "Privacy", href: "#", external: false },
    { name: "Terms", href: "#", external: false },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <DatabaseLogo className="w-32 sm:w-40" />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Redefining the way databases are built and managed. Built in Switzerland, made for the world.
            </p>
            <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Product
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="bg-gray-100 dark:bg-gray-500/20 size-3 p-px ml-1 rounded-full aspect-square">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full text-gray-900 dark:text-gray-300 shrink-0"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Resources
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="bg-gray-100 dark:bg-gray-500/20 size-3 p-px ml-0.5 rounded-full aspect-square">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full text-gray-900 dark:text-gray-300 shrink-0"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Company
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className=" bg-gray-100 dark:bg-gray-500/20 size-3 p-px ml-1 rounded-full aspect-square">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full text-gray-900 dark:text-gray-300 shrink-0"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Legal
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Legal"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className=" bg-gray-100 dark:bg-gray-500/20 size-3 p-px ml-1 rounded-full aspect-square">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full text-gray-900 dark:text-gray-300 shrink-0"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="border border-gray-100 dark:border-gray-800 rounded-full pl-1 pr-2 py-1">
            <div className="flex items-center gap-1">
              <div className="relative size-3">
                <div className="absolute rounded-full inset-0 bg-emerald-400/10 dark:bg-emerald-600/20" />
                <div className="absolute rounded-full inset-1 bg-emerald-600 dark:bg-emerald-500" />
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-50">
                All systems operational
              </span>
            </div>
          </div>
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Database, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
