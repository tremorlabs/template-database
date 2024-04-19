import React from "react";
import Ycompany from "../../../public/DatabaseLogo";
import Link from "next/link";
import {
  RiArrowDownCircleFill,
  RiArrowRightUpFill,
  RiArrowRightUpLine,
} from "@remixicon/react";

const year = new Date().getFullYear();

const footerSections = [
  {
    title: "Product",
    items: [
      { name: "Enterprise", href: "/enterprise", external: false },
      { name: "Pricing", href: "/pricing", external: false },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Docs", href: "/help", external: false },
      { name: "FAQ", href: "/support", external: false },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About", href: "/about", external: false },
      { name: "Careers", href: "/careers", external: false },
      { name: "Contact", href: "/contact", external: false },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Imprint", href: "#", external: false },
      { name: "Privacy", href: "#", external: true },
      {
        name: "Terms",
        href: "#",
        external: false,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-40 mb-10 mx-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between mx-auto">
          <div className="flex flex-col gap-12">
            <Ycompany className="w-40" />
            <div>
              <span className="text-gray-500 text-sm">
                123 Market Street <br /> #1334 <br />
                New York, NY <br />
                United States{" "}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-20">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-gray-900 text-sm font-medium">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2 mt-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        className="text-gray-500 hover:text-gray-900 transition rounded-md flex"
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
            ))}
          </div>
        </div>
        <div className="w-full border-b border-dashed my-12" />

        <p className="text-xs leading-6 text-gray-400 font-medium ">
          &copy; {year} Database, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
