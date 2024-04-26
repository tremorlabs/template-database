import React from "react";
import { DatabaseLogo } from "../../../public/DatabaseLogo";
import Link from "next/link";
import {
  RiArrowRightUpLine,
  RiDiscordFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react";

const navigation = {
  product: [
    { name: "Enterprise", href: "#", external: false },
    { name: "Pricing", href: "#", external: false },
  ],
  resources: [
    { name: "Docs", href: "#", external: false },
    { name: "FAQs", href: "#", external: false },
  ],
  company: [
    { name: "About", href: "#", external: false },
    { name: "Careers", href: "#", external: true },
    { name: "Contact", href: "#", external: false },
  ],
  legal: [
    { name: "Imprint", href: "#", external: false },
    { name: "Privacy", href: "#", external: true },
    { name: "Terms", href: "#", external: false },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: RiGithubFill,
    },
    {
      name: "Discord",
      href: "#",
      icon: RiDiscordFill,
    },
    {
      name: "X",
      href: "#",
      icon: RiTwitterXFill,
    },
    {
      name: "YouTube",
      href: "#",
      icon: RiYoutubeFill,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <DatabaseLogo className="w-32 sm:w-40" />
            <p className="text-sm leading-6 text-gray-600">
              Redefining the way databases are built and managed. Built in
              Switzerland, made for the world.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Product">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-sm text-gray-500 hover:text-gray-900 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="bg-gray-100 size-3 p-px ml-0.5 rounded-full aspect-square">
                            <RiArrowRightUpLine className="size-full text-gray-900 shrink-0" />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Resources">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-sm text-gray-500 hover:text-gray-900 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="bg-gray-100 size-3 p-px ml-0.5 rounded-full aspect-square">
                            <RiArrowRightUpLine className="size-full text-gray-900 shrink-0" />
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
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Company">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-sm text-gray-500 hover:text-gray-900 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className=" bg-gray-100 size-3 p-px ml-0.5 rounded-full aspect-square">
                            <RiArrowRightUpLine className="size-full text-gray-900 shrink-0" />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Legal">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-sm text-gray-500 hover:text-gray-900 transition rounded-md flex"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className=" bg-gray-100 size-3 p-px ml-0.5 rounded-full aspect-square">
                            <RiArrowRightUpLine className="size-full text-gray-900 shrink-0" />
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
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Database, Inc. All rights
            reserved.
          </p>
        </div>
    </footer>
  );
}
