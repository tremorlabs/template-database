"use client"
import React, { Fragment } from "react";
import { RiCheckLine, RiUserLine, RiCloudLine, RiSubtractLine } from "@remixicon/react";


import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

import { cx } from "@/lib/utils";


const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/mo' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const plans = [
    {
        name: 'Starter',
        price: '$0',
        description: 'For small teams',
        prosa: ['Up to 5 users, 1 admin', 'Up to 10 workspaces'],
        features: ['Unlimited members', '5 workspaces', 'Community Slack Support'],
        isEnterprise: false,
        isRecommended: false,
        buttonText: 'Get started',
        buttonLink: '#',
    },
    {
        name: 'Teams',
        price: { monthly: '$50', annually: '$490' },
        description: 'For growing teams',
        prosa: ['Up to 100 users, 3 admins', 'Up to 20 workspaces'],
        features: ['Unlimited members', '10 workspaces', 'Community Slack Support'],
        isEnterprise: false,
        isRecommended: true,
        buttonText: 'Get started',
        buttonLink: '#',
    },
    {
        name: 'Business',
        price: 'Custom',
        description: 'For custom needs',
        prosa: ['Up to 500 users, 10 admins', 'Up to 100 workspaces'],
        features: [
            'Unlimited members',
            'Unlimited workspaces',
            'Priority Support',
            'Single Sign-On (SSO)',
            '90 days of history',
        ],
        isEnterprise: true,
        isRecommended: false,
        buttonText: 'Contact sales',
        buttonLink: '#',
    },
];

const tiers = [
    {
        title: 'Starter',
        subtitle: 'Free',
        id: 'tier-Starter',
        href: '#',
        priceMonthly: '$9',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        title: 'Teams',
        subtitle: '$5 / user',
        id: 'tier-Team',
        href: '#',
        priceMonthly: '$29',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
    {
        title: 'Business',
        subtitle: '$10 / user',
        id: 'tier-Business',
        href: '#',
        priceMonthly: '$59',
        description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
        mostPopular: false,
    },
]
const sections = [
    {
        name: 'Workspace Features',
        features: [
            { name: 'Email notifications & webhooks', tiers: { Starter: true, Teams: true, Business: true } },
            { name: 'Workspaces', tiers: { Starter: '5', Teams: '10', Business: 'Unlimited' } },
            { name: 'Storage', tiers: { Start: '$0.65 per stored GB', Teams: '$0.34 per stored GB', Business: 'Customized¹' } },
            { name: 'Seats', tiers: { Starter: '5 users', Teams: 'Up to 20 users', Business: 'Unlimited' } },
        ],
    },
    {
        name: 'Automation',
        features: [
            { name: 'Service accounts', tiers: { Start: true, Teams: true, Business: true } },
            { name: 'Admin API', tiers: { Teams: true, Business: true } },
            { name: 'No-Code workflow builder', tiers: { Starter: 'Limited', Teams: 'Standard', Business: 'Enhanced' } },
        ],
    },
    {
        name: 'Analytics',
        features: [
            { name: 'Analytics retention', tiers: { Starter: '7 days', Teams: '1 year', Business: 'Unlimited' } },
            { name: 'Anomaly detection', tiers: { Teams: true, Business: true } },
            { name: 'Custom report builder', tiers: { Business: true } },
        ],
    },
    {
        name: 'Support',
        features: [
            { name: 'Slack', tiers: { Starter: 'Community', Teams: 'Connect', Business: 'Dedicated agent' } },
            { name: 'Email', tiers: { Starter: '2-4 days', Teams: '1-2 days', Business: 'Priority' } },
        ],
    },
]



export default function Pricing() {
    const [frequency, setFrequency] = React.useState(frequencies[0]);

    const handleFrequencyChange = (selectedFrequency: any) => {
        setFrequency(selectedFrequency);
    };
    return (
        <div>
            <Navigation />
            <main className="mt-40 max-w-6xl mx-auto px-3">
                <div className="w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-200/20 bg-indigo-50/50 tracking-tighter leading-4 z-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-indigo-600">
                        Pricing
                    </span>
                </div>
                <h2 className="mt-2 text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2">
                    Our plans scale with you
                </h2>
                <p className="mt-6 text-lg max-w-2xl text-gray-700">
                    Plans that empower you and your team to ship without friction. Our flexible pricing models ensure that efficiency doesn't come at the cost of your budget.
                </p>

                {/* <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, planIdx) => (
                        <div
                            key={planIdx}
                            className={cx(
                                plan.isRecommended
                                    ? 'border border-gray-200'
                                    : 'border border-gray-200',
                                'relative flex flex-col justify-between rounded-lg bg-white p-6',
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 className="text-sm font-semibold leading-8 text-gray-900">
                                    {plan.name}
                                </h3>
                                {plan.isRecommended ? (
                                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium leading-5 text-indigo-600">
                                        Recommended
                                    </span>
                                ) : null}
                            </div>
                            <p className="text-sm text-gray-500">
                                {plan.description}
                            </p>
                            <p className="mt-6 flex items-baseline">
                                <span className="text-4xl font-semibold text-transparent bg-clip-text inline-block bg-gradient-to-t from-indigo-900 to-indigo-600">
                                    {plan.isRecommended ? plan.price[frequency.value] : plan.price}
                                </span>
                                {plan.isRecommended ? (
                                    <span className="text-sm text-gray-500">
                                        {frequency.priceSuffix}
                                    </span>
                                ) : null}
                            </p>
                            <div className="relative flex h-20 items-center justify-center">
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden={true}
                                >
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                {plan.isRecommended ? (
                                    <div className="relative grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
                                        {frequencies.map((option) => (
                                            <label
                                                key={option.value}
                                                className={cx(
                                                    option.value === frequency.value
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'text-gray-500',
                                                    'cursor-pointer rounded-full px-2.5 py-1',
                                                )}
                                            >
                                                <input
                                                    type="radio"
                                                    value={option.value}
                                                    checked={option.value === frequency.value}
                                                    onChange={() => handleFrequencyChange(option)}
                                                    className="sr-only"
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col grow">
                                <ul role="list" className="text-sm text-gray-700">
                                    {plan.prosa.map((feature, index) => (
                                        <li
                                            key={feature}
                                            className="flex items-center space-x-2 py-1.5"
                                        >
                                            {index === 0 && (
                                                <RiUserLine
                                                    className="h-5 w-5 shrink-0 text-indigo-600"
                                                    aria-hidden={true}
                                                />
                                            )}
                                            {index === 1 && (
                                                <RiCloudLine
                                                    className="h-5 w-5 shrink-0 text-indigo-600"
                                                    aria-hidden={true}
                                                />
                                            )}
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <ul role="list" className="text-sm text-gray-700">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center space-x-2 py-1.5"
                                            >
                                                <RiCheckLine
                                                    className="h-5 w-5 shrink-0 text-indigo-600"
                                                    aria-hidden={true}
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {!plan.isRecommended ? (
                                <a
                                    href={plan.buttonLink}
                                    className="mt-6 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-sm"
                                >
                                    {plan.buttonText}
                                </a>
                            ) : (
                                <a
                                    href={plan.buttonLink}
                                    className="mt-6 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-indigo-600 text-sm font-medium text-white shadow-sm"
                                >
                                    {plan.buttonText}
                                </a>
                            )}
                        </div>
                    ))}
                </div> */}

                <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                    {tiers.map((tier) => (
                        <section
                            key={tier.id}
                        >
                            <div className={cx(
                                tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200',
                                "p-8"
                            )}>
                                <h3 id={tier.id} className="text-sm font-semibold leading-6 text-gray-900">
                                    {tier.title}
                                </h3>
                                <p className="text-sm font-normal text-gray-600">{tier.subtitle}</p>
                            </div>
                            <ul role="list" className="mt-10 space-y-10 text-sm leading-6 text-gray-900">
                                {sections.map((section) => (
                                    <li key={section.name}>
                                        <h4 className="font-semibold">{section.name}</h4>
                                        <ul role="list" className="mt-2 divide-y">
                                            {section.features.map((feature) =>
                                                feature.tiers[tier.title] ? (
                                                    <li key={feature.name} className="py-2.5 flex gap-x-3">
                                                        <RiCheckLine className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                        <span>
                                                            {feature.name}{' '}
                                                            {typeof feature.tiers[tier.title] === 'string' ? (
                                                                <span className="text-sm leading-6 text-gray-500">({feature.tiers[tier.title]})</span>
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

                <div className="isolate mt-24 hidden lg:block">
                    <div className="relative -mx-8">
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 pt-6 xl:px-0 xl:pt-8">
                                        <div className="text-sm font-semibold leading-7 text-gray-900">Compare prices</div>
                                        <div className="text-sm font-normal text-gray-600">Price per month (billed yearly)</div>
                                    </th>
                                    {tiers.map((tier) => (
                                        <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                            <div className="text-sm font-semibold leading-7 text-gray-900">{tier.title}</div>
                                            <div className="text-sm font-normal text-gray-600">{tier.subtitle}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                            <tbody>
                                {sections.map((section, sectionIdx) => (
                                    <Fragment key={section.name}>
                                        <tr>
                                            <th
                                                scope="colgroup"
                                                colSpan={4}
                                                className={cx(
                                                    sectionIdx === 0 ? 'pt-14' : 'pt-16',
                                                    'pb-0 text-sm font-semibold leading-6 text-gray-900'
                                                )}
                                            >
                                                {section.name}
                                                {/* <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" /> */}
                                            </th>
                                        </tr>
                                        {section.features.map((feature) => (
                                            <tr key={feature.name}>
                                                <th scope="row" className="py-4 text-sm font-normal leading-6 text-gray-900">
                                                    {feature.name}
                                                    <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                                                </th>
                                                {tiers.map((tier) => (
                                                    <td key={tier.id} className="px-6 py-4 xl:px-8">
                                                        {typeof feature.tiers[tier.title] === 'string' ? (
                                                            <div className="text-sm leading-6 text-gray-500">
                                                                {feature.tiers[tier.title]}
                                                            </div>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.title] === true ? (
                                                                    <RiCheckLine className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                                ) : (
                                                                    <RiSubtractLine className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.title] === true ? 'Included' : 'Not included'} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main >
            <Footer />
        </div >
    );
}