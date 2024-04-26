"use client";
import React, { Fragment } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Accordion";
import {
    RiCheckLine,
    RiUserLine,
    RiCloudLine,
    RiSubtractLine,
    RiArrowRightSLine,
} from "@remixicon/react";

import { Checkbox } from "@/components/Checkbox";

import Image from "next/image";

import { cx } from "@/lib/utils";

interface Frequency {
    value: string;
    label: string;
}

interface Price {
    monthly: string;
    annually: string;
}

interface Plan {
    name: string;
    price: string | Price;
    description: string;
    capacity: string[];
    features: string[];
    isStarter: boolean;
    isRecommended: boolean;
    buttonText: string;
    buttonLink: string;
}

interface PlanAvailability {
    [key: string]: boolean | string;
}

const frequencies: Frequency[] = [
    { value: "monthly", label: "Monthly" },
    { value: "annually", label: "Annually" },
];

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
        description:
            "For small teams that need a scalable database.",
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
        description: "For larger teams that need more advanced controls and features.",
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
    plans: PlanAvailability;
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
                plans: { Starter: true, Teams: true, Business: true },
            },
            {
                name: "Workspaces",
                plans: { Starter: "5", Teams: "10", Business: "Unlimited" },
            },
            {
                name: "Storage",
                plans: {
                    Starter: "$0.65 per stored GB",
                    Teams: "$0.34 per stored GB",
                    Business: "Customized¹",
                },
            },
            {
                name: "Seats",
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
                plans: { Starter: true, Teams: true, Business: true },
            },
            { name: "Admin API", plans: { Teams: true, Business: true } },
            {
                name: "No-Code workflow builder",
                plans: { Starter: "Limited", Teams: "Standard", Business: "Enhanced" },
            },
        ],
    },
    {
        name: "Analytics",
        features: [
            {
                name: "Analytics retention",
                plans: { Starter: "7 days", Teams: "1 year", Business: "Unlimited" },
            },
            { name: "Anomaly detection", plans: { Teams: true, Business: true } },
            { name: "Custom report builder", plans: { Business: true } },
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

const faqs = [
    {
        question:
            "How secure is the database software in terms of protecting sensitive data?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        question: "Can the database be self-hosted?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        question:
            "Does the software support integration with other systems and applications?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        question:
            "How easy is it to back up and restore data using the database software?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        question:
            "What level of technical support and maintenance is provided for the software?",
        answer:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
];

export default function Pricing() {
    const [frequency, setFrequency] = React.useState(frequencies[1]);

    // @SEV: simplify + types
    const handleFrequencyChange = (selectedFrequency: any) => {
        if (selectedFrequency.value === frequency.value) {
            setFrequency(frequencies[0]);
        } else {
            setFrequency(selectedFrequency);
        }
    };
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

            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                                {/* @SEV: types */}
                                {!plan.isStarter
                                    ? (plan.price as any)[frequency.value]
                                    : plan.price}
                            </span>
                            {!plan.isStarter ? (
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <p className="text-xs text-gray-600">per user</p>
                                        <p className="text-xs text-gray-600">
                                            per month
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        {/* @SEV: make it checkable locally not for both simoutanesly */}
                                        <Checkbox
                                            id={`discount-${planIdx}`}
                                            name={`discount-${planIdx}`}
                                            value={frequency.value}
                                            checked={frequency.value === frequencies[1].value}
                                            onCheckedChange={() => handleFrequencyChange(frequencies.find(freq => freq.value === frequencies[1].value))}
                                        />
                                        <label htmlFor={`discount-${planIdx}`} className="text-xs font-medium text-gray-600">yearly -15%</label>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-between">
                            {/* @CHRIS: fix edge case */}
                            <div className="flex flex-col grow">
                                <p className="mt-6 text-sm text-gray-600 leading-6">
                                    {plan.description}
                                </p>
                            </div>
                            <div>
                                {/* @SEV: Animated Sev Arrows */}
                                {plan.isStarter ? (
                                    <a
                                        href={plan.buttonLink}
                                        className="mt-6 inline-flex w-fit items-center gap-x-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-sm"
                                    >
                                        {plan.buttonText}
                                        <RiArrowRightSLine
                                            className="size-5 shrink-0"
                                            aria-hidden="true"
                                        />
                                    </a>
                                ) : (
                                    <a
                                        href={plan.buttonLink}
                                        className="mt-6 inline-flex w-fit items-center gap-x-2 px-4 py-2 rounded-full bg-indigo-600 text-sm font-medium text-white shadow-sm"
                                    >
                                        {plan.buttonText}
                                        <RiArrowRightSLine
                                            className="size-5 shrink-0"
                                            aria-hidden="true"
                                        />
                                    </a>
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

            {/* Testimonial */}
            <div className="mt-20 sm:mt-36 mx-auto max-w-xl lg:max-w-6xl space-y-4">
                <figure className="mx-auto max-w-4xl">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 text-balance max-w-2xl mx-auto">
                        <p>
                            “Thanks to this robust database solution, our organization has
                            streamlined data management processes, leading to increased
                            efficiency and accuracy in our operations.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10 flex items-center justify-center gap-x-5">
                        <Image
                            className="h-11 w-11 rounded-full object-cover shadow-lg shadow-indigo-500/50 ring-2 ring-white"
                            width={200}
                            height={200}
                            src="/images/testimonial.jpg"
                            alt="Image of Dima Coil"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">
                                Dima Coil
                            </p>
                            <p className="text-sm text-gray-600">CEO Hornertools</p>
                        </div>
                    </figcaption>
                </figure>
            </div>

            {/* plan details (xs-lg)*/}
            <div className="mx-auto mt-20 sm:max-w-md space-y-8 sm:mt-36 lg:hidden">
                {plans.map((plan) => (
                    <section key={plan.name}>
                        <div
                            className="p-6 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200"
                        >
                            <h3
                                id={plan.name}
                                className="text-base font-semibold leading-6 text-gray-900"
                            >
                                {plan.name}
                            </h3>
                            <p className="text-sm font-normal text-gray-600">
                                {typeof plan.price === 'string' ? plan.price : `${plan.price.monthly} / per user`}
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
                                                <li key={feature.name} className="py-2.5 flex gap-x-3">
                                                    <RiCheckLine
                                                        className="h-6 w-5 flex-none text-indigo-600"
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
                    </section>
                ))}
            </div>

            {/* plan details (lg+) */}
            <div className="mt-20 sm:mt-28 hidden lg:block">
                <div className="relative">
                    {/* @SEV: how to hide the divider lines in the table in the sticky bar? */}
                    <div className="w-full h-28 bg-white sticky top-0 z-20" />
                    <table className="w-full table-fixed border-separate border-spacing-0 gap-bo text-left">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <colgroup>
                            <col className="w-2/5" />
                            <col className="w-1/5" />
                            <col className="w-1/5" />
                            <col className="w-1/5" />
                        </colgroup>
                        <thead className="sticky top-28">
                            <tr>
                                <th scope="col" className="pb-8 bg-white border-b">
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
                                        className="px-6 lg:px-8 pb-8 bg-white border-b"
                                    >
                                        <div className={cx(
                                            !plan.isStarter ? 'text-indigo-600' : 'text-gray-900',
                                            "text-sm font-semibold leading-7"
                                        )}>
                                            {plan.name}
                                        </div>
                                        <div className="text-sm font-normal text-gray-600">
                                            {typeof plan.price === 'string' ? plan.price : `${plan.price.monthly} / per user`}
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
                                                "pb-0 text-sm font-semibold leading-6 text-gray-900"
                                            )}
                                        >
                                            {section.name}
                                        </th>
                                    </tr>
                                    {section.features.map((feature) => (
                                        <tr key={feature.name}>
                                            <th
                                                scope="row"
                                                className="py-4 text-sm font-normal leading-6 text-gray-900"
                                            >
                                                {feature.name}
                                                {/* @SEV: lines are still in front of table header although z is set*/}
                                                <div className="absolute inset-x-0 mt-4 h-px bg-gray-900/5 z-10" />
                                            </th>
                                            {plans.map((plan) => (
                                                <td key={plan.name} className="px-6 py-4 lg:px-8">
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
                                        {/* @SEV: Animated Sev Arrows */}
                                        {plan.isStarter ? (
                                            <a
                                                href={plan.buttonLink}
                                                className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900"
                                                // @SEV: check aria logic
                                                aria-label={`Activate plan ${plan.name}`}

                                            >
                                                {plan.buttonText}
                                                <RiArrowRightSLine
                                                    className="size-5 shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        ) : (
                                            <a
                                                href={plan.buttonLink}
                                                className="inline-flex items-center gap-x-1 text-indigo-600 text-sm font-semibold"
                                                // @SEV: check aria logic
                                                aria-label={`Activate plan ${plan.name}`}
                                            >
                                                {plan.buttonText}
                                                <RiArrowRightSLine
                                                    className="size-5 shrink-0"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAQs */}
            <div className="mt-20 sm:mt-36 grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
                <div className="col-span-full sm:col-span-5">
                    <h2 className="text-2xl lg:text-3xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2 pr-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        Can&apos;t find the answer you&apos;re looking for? Don&apos;t
                        hesitate to get in touch with our{" "}
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            customer support
                        </a>{" "}
                        team.
                    </p>
                </div>
                <div className="mt-6 lg:mt-0 col-span-full lg:col-span-7 ">
                    <Accordion type="multiple" className="mx-auto">
                        {faqs.map((item) => (
                            <AccordionItem
                                value={item.question}
                                key={item.question}
                                className="first:pb-3 first:pt-0 py-3"
                            >
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
}
