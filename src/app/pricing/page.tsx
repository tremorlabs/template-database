"use client";
import React, { Fragment } from "react";
import {
  RiCheckLine,
  RiUserLine,
  RiCloudLine,
  RiSubtractLine,
  RiInformationLine,
} from "@remixicon/react";

import { cx } from "@/lib/utils";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowAnimated } from "@/components/ui/ArrowAnimated";
import { Faqs } from "@/components/ui/Faqs";
import Testimonial from "@/components/ui/Testimonial";
import { Switch } from "@/components/Switch";
import { Badge } from "@/components/Badge";
import { Label } from "@/components/Label";
import { Tooltip } from "@/components/Tooltip";

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  price: FixedPrice | VariablePrice;
  description: string;
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
  buttonLink: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    description:
      "For individuals and freelancers that need a scalable database.",
    capacity: ["Up to 5 users, 1 admin", "1 workspace"],
    features: [
      "Up to 1000/req. per day",
      "5 GB max storage",
      "Community Slack Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Teams",
    price: { monthly: "$49", annually: "$39" },
    description: "For small teams that need a scalable database.",
    capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
    features: [
      "Unlimited requests",
      "$0.07 per processed GB",
      "$0.34 per stored GB",
      "Slack Connect",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Business",
    price: { monthly: "$89", annually: "$79" },
    description:
      "For larger teams that need more advanced controls and features.",
    capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
    features: [
      "Unlimited requests",
      "Volume discount",
      "$0.03 per processed GB",
      "$0.1 per stored GB",
      "Single Sign-On (SSO)",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
];

interface Feature {
  name: string;
  plans: Record<string, boolean | string>;
  tooltip?: string;
}

interface Section {
  name: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    name: "Workspace Features",
    features: [
      {
        name: "Email notifications & webhooks",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Workspaces",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
      },
      {
        name: "Storage",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "$0.65 per stored GB",
          Teams: "$0.34 per stored GB",
          Business: "Customized¹",
        },
      },
      {
        name: "Seats",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: {
          Starter: "5 users",
          Teams: "Up to 20 users",
          Business: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Service accounts",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: true, Teams: true, Business: true },
      },
      {
        name: "Admin API",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "No-Code workflow builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Analytics retention",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
      },
      {
        name: "Anomaly detection",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Teams: true, Business: true },
      },
      {
        name: "Custom report builder",
        tooltip:
          "Consectetur qui culpa ipsum in ea irure duis culpa incididunt.",
        plans: { Business: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Slack",
        plans: {
          Starter: "Community",
          Teams: "Connect",
          Business: "Dedicated agent",
        },
      },
      {
        name: "Email",
        plans: { Starter: "2-4 days", Teams: "1-2 days", Business: "Priority" },
      },
    ],
  },
];

const isVariablePrice = (
  price: FixedPrice | VariablePrice
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined;
};

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly");
  return (
    <>
      <div className="w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-200/20 bg-indigo-50/50 tracking-tighter leading-4 z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-indigo-600">
          Pricing
        </span>
      </div>
      <h2 className="mt-2 text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2">
        Our plans scale with you
      </h2>
      <p className="mt-6 text-lg max-w-2xl text-gray-700">
        Plans that empower you and your team to ship without friction. Our
        flexible pricing models ensure that efficiency doesn&apos;t come at the
        cost of your budget.
      </p>

      <section className="mt-20">
        <div className="flex items-center justify-center gap-2">
          <Label htmlFor="switch" className="text-sm font-medium">
            Switch to yearly <Badge>-15%</Badge>
          </Label>
          <Switch
            id="switch"
            checked={billingFrequency === "annually"}
            onCheckedChange={() =>
              setBillingFrequency(
                billingFrequency === "monthly" ? "annually" : "monthly"
              )
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <div key={planIdx} className="bg-white p-6">
              {plan.isRecommended ? (
                <div className="h-4 flex items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-indigo-600" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-indigo-600">
                        Most popular
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-4 flex items-center">
                  <div className="h-px w-full bg-gray-200" />
                </div>
              )}

              <h3 className="mt-6 text-sm font-semibold text-gray-900">
                {plan.name}
              </h3>
              <div className="mt-3 flex gap-x-3 items-center">
                <span className="text-5xl tabular-nums font-semibold text-gray-900">
                  {isVariablePrice(plan.price)
                    ? billingFrequency === "monthly"
                      ? plan.price.monthly
                      : plan.price.annually
                    : plan.price}
                </span>
                <div className="text-xs text-gray-600">
                  per user <br /> per month
                </div>
              </div>
              <div className="flex flex-col justify-between">
                {/* @CHRIS: fix edge case */}
                <div className="flex flex-col grow">
                  <p className="mt-6 text-sm text-gray-600 leading-6">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-6">
                  {plan.isStarter ? (
                    <Button variant="secondary" asChild className="group">
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                        <ArrowAnimated />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild className="group">
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                        <ArrowAnimated />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <ul role="list" className="mt-8 text-sm text-gray-700">
                {plan.capacity.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-3 py-1.5"
                  >
                    {index === 0 && (
                      <RiUserLine
                        className="size-4 shrink-0 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    {index === 1 && (
                      <RiCloudLine
                        className="size-4 shrink-0 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ul role="list" className="mt-4 text-sm text-gray-700">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-3 py-1.5"
                  >
                    <RiCheckLine
                      className="size-4 shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-32 mx-auto max-w-xl lg:max-w-6xl">
        <Testimonial />
      </section>

      {/* plan details (xs-lg)*/}
      <section className="mx-auto mt-20">
        <div className="sm:max-w-md space-y-8 sm:mt-36 lg:hidden">
          {plans.map((plan) => (
            <div key={plan.name}>
              <div className="p-6 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200">
                <h3
                  id={plan.name}
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  {plan.name}
                </h3>
                <p className="text-sm font-normal text-gray-600">
                  {isVariablePrice(plan.price)
                    ? `${
                        billingFrequency === "monthly"
                          ? plan.price.monthly
                          : plan.price.annually
                      } / per user`
                    : plan.price}
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 space-y-10 text-sm leading-6 text-gray-900"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <h4 className="font-semibold">{section.name}</h4>
                    <ul role="list" className="mt-2 divide-y">
                      {section.features.map((feature) =>
                        feature.plans[plan.name] ? (
                          <li
                            key={feature.name}
                            className="py-2.5 flex gap-x-3"
                          >
                            <RiCheckLine
                              className="size-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.plans[plan.name] === "string" ? (
                                <span className="text-sm leading-6 text-gray-500">
                                  ({feature.plans[plan.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* plan details (lg+) */}
      <section className="mx-auto mt-20">
        <div className="mt-20 sm:mt-28 hidden lg:block">
          <div className="relative">
            <div className="w-full h-28 bg-white sticky top-0 z-20" />
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="sticky top-28">
                <tr>
                  <th
                    scope="col"
                    className="pb-8 bg-white border-b border-gray-100"
                  >
                    <div className="text-sm font-semibold leading-7 text-gray-900">
                      Compare prices
                    </div>
                    <div className="text-sm font-normal text-gray-600">
                      Price per month (billed yearly)
                    </div>
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="px-6 lg:px-8 pb-8 bg-white border-b border-gray-100"
                    >
                      <div
                        className={cx(
                          !plan.isStarter ? "text-indigo-600" : "text-gray-900",
                          "text-sm font-semibold leading-7"
                        )}
                      >
                        {plan.name}
                      </div>
                      <div className="text-sm font-normal text-gray-600">
                        {isVariablePrice(plan.price)
                          ? `${
                              billingFrequency === "monthly"
                                ? plan.price.monthly
                                : plan.price.annually
                            } / per user`
                          : plan.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "text-sm font-semibold leading-6 text-gray-900 border-b border-gray-100 pb-4"
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="hover:bg-indigo-50/30 transition"
                      >
                        <th
                          scope="row"
                          className="py-4 flex gap-2 items-center text-sm font-normal leading-6 text-gray-900 border-b border-gray-100"
                        >
                          <span>{feature.name}</span>
                          {feature.tooltip ? (
                            <Tooltip side="right" content={feature.tooltip}>
                              <RiInformationLine className="size-4 text-gray-700 shrink-0" />
                            </Tooltip>
                          ) : null}
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="px-6 py-4 lg:px-8 border-b border-gray-100"
                          >
                            {typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-gray-500">
                                {feature.plans[plan.name]}
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.name] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.plans[plan.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {plan.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="pt-6 text-sm font-normal leading-6 text-gray-900"
                  >
                    <span className="sr-only">Link to activate plan</span>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 pt-6 lg:px-8">
                      {plan.isStarter ? (
                        <Button
                          variant="light"
                          asChild
                          className="group px-0 bg-transparent hover:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          asChild
                          className="group px-0 bg-transparent hover:bg-transparent text-indigo-600"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        className="
      mt-20 sm:mt-36 "
      >
        <Faqs />
      </section>
    </>
  );
}
