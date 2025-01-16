'use client'

import { useState } from 'react'
import {  Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { CTASection } from '../../../components/Body'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ],
  tiers: [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '#',
      featured: false,
      description: 'Perfect for startups and small businesses getting started with automation.',
      price: { monthly: '$29', annually: '$149' },
      highlights: ['Access to Google Analytics API', 'Basic Twilio SMS/Email integration (Up to 1,000 messages/month)', 'Stripe API for basic payment processing', ' 5 automated workflows via Integromat/Zapier', 'Standard analytics dashboard'],
    },
    {
      name: 'Scale',
      id: 'tier-scale',
      href: '#',
      featured: true,
      description: 'Designed for scaling businesses that require robust automation and premium support.',
      price: { monthly: '$199', annually: '$799' },
      highlights: [
        'Everything in Growth',
        'Unlimited Twilio messaging (Fair usage policy applies)',
        'Full Stripe integration (Custom invoicing, global payments)',
        'Unlimited workflows via Integromat/Zapier',
        'Dedicated API support with 24/7 live chat',
        'Single Sign-On (SSO) integration',
        'Custom onboarding and strategy sessions'
      ],
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: '#',
      featured: false,
      description: 'Ideal for growing teams that need advanced integrations and higher limits.',
      price: { monthly: '$79', annually: '$399' },
      highlights: ['Everything in Starter', 'Enhanced Twilio messaging (Up to 10,000 messages/month)', 'Stripe advanced payment features (Subscriptions, Billing)', '20 automated workflows via Integromat/Zapier', 'Priority email support', 'Access to quarterly marketing workshops'],
    },
  ],
  sections: [
    {
      name: 'Features',
      features: [
        { name: 'API Access', tiers: { Starter: 'Limited (Google Analytics, Twilio)', Growth: 'Full Access (Google Analytics, Twilio, Stripe)', Scale: 'Full Access (Google Analytics, Twilio, Stripe, Integromat, Zapier)' } },
        { name: 'Edge Content Delivery', tiers: { Starter: true, Growth: true, Scale: true } },
        { name: 'Custom Domains', tiers: { Starter: '1', Growth: '3', Scale: 'Unlimited' } },
        { name: 'Team Members', tiers: { Starter: '3', Growth: '20', Scale: 'Unlimited' } },
        { name: 'Single Sign-On (SSO)', tiers: { Starter: false, Growth: false, Scale: true } },
      ],
    },
    {
      name: 'Reporting',
      features: [
        { name: 'Advanced Analytics', tiers: { Starter: true, Growth: true, Scale: true } },
        { name: 'Basic reports', tiers: { Starter: false, Growth: true, Scale: true } },
        { name: 'Professional reports', tiers: { Starter: false, Growth: false, Scale: true } },
        { name: 'Custom report builder', tiers: { Starter: false, Growth: false, Scale: true } },
      ],
    },
    {
      name: 'Support',
      features: [
        { name: '24/7 online support', tiers: { Starter: true, Growth: true, Scale: true } },
        { name: 'Quarterly workshops', tiers: { Starter: false, Growth: true, Scale: true } },
        { name: 'Priority phone support', tiers: { Starter: false, Growth: false, Scale: true } },
        { name: '1:1 onboarding tour', tiers: { Starter: false, Growth: false, Scale: true } },
      ],
    },
  ],
}
const faqs = [
  {
    id: 1,
    question: "❓ What is Inteegrations and how does it work?",
    answer:
      "Inteegrations is a powerful API platform that connects your favorite marketing tools like Google Analytics, Twilio, Stripe, Integromat, and Zapier. It automates workflows, manages data, and optimizes marketing campaigns without manual intervention.",
  },
  {
    id: 2,
    question: "❓ Which APIs are included in the subscription plans?",
    answer:
      "All plans include access to major marketing APIs such as Google Analytics for insights, Twilio for SMS and email communication, Stripe for payment processing, and automation tools like Integromat and Zapier. Higher-tier plans offer advanced features and unlimited API calls.",
  },{
    id: 3,
    question: "❓ Can I upgrade or downgrade my plan anytime?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time directly from your dashboard. Changes will be reflected in the next billing cycle.",
  },{
    id: 4,
    question: "❓ Do you offer customer support?",
    answer:
      "Yes! We offer 24/7 online support for all plans. Priority phone support and 1:1 onboarding sessions are available in the Scale plan.",
  },{
    id: 5,
    question: "❓ Is my data secure with Inteegrations?",
    answer:
      "Security is our top priority. We use end-to-end encryption, GDPR-compliant practices, and SSL certificates to ensure your data is safe and protected.",
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PriceSec() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white">
      <main>
        <div className="overflow-hidden isolate">
          <div className="bg-primary py-16 sm:pt-32 lg:pb-0 flow-root">
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl font-semibold text-5xl text-balance text-center text-white sm:text-6xl tracking-tight">
                  Pricing that scales with your business
                </h1>
                <p className="mx-auto mt-6 max-w-2xl font-medium text-center text-gray-400 text-lg text-pretty sm:text-xl/8">
                  Choose the perfect plan to integrate powerful marketing APIs and automate your workflows. Flexible pricing designed to fit any stage of your business growth.
                </p>
                <div className="flex justify-center mt-16">
                  <fieldset aria-label="Payment frequency">
                    <RadioGroup
                      value={frequency}
                      onChange={setFrequency}
                      className="gap-x-1 grid grid-cols-2 bg-white/5 p-1 rounded-full font-semibold text-center text-white text-xs/5"
                    >
                      {pricing.frequencies.map((option) => (
                        <Radio
                          key={option.value}
                          value={option}
                          className="data-[checked]:bg-secondary px-2.5 py-1 rounded-full transition-colors duration-300 cursor-pointer ease-in-out"
                        >
                          {option.label}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
              </div>
              <div className="relative gap-y-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 lg:-mb-14 max-w-md lg:max-w-none">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="lg:-top-48 -bottom-48 lg:bottom-auto left-1/2 absolute h-[64rem] -translate-x-1/2 translate-y-1/2 lg:translate-y-0 [mask-image:radial-gradient(closest-side,white,transparent)]"
                >
                  <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#0B192C" />
                      <stop offset={1} stopColor="#FF6500" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  aria-hidden="true"
                  className="lg:block lg:top-4 lg:bottom-0 lg:absolute lg:inset-x-px hidden lg:bg-gray-800/80 lg:rounded-t-2xl lg:ring-1 lg:ring-white/10"
                />
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                      'relative rounded-2xl',
                    )}
                  >
                    <div className="p-8 xl:p-10 lg:pt-12 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white',
                          'text-sm/6 font-semibold',
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex sm:flex-row flex-col lg:flex-col sm:justify-between sm:items-end lg:items-stretch gap-6">
                        <div className="flex items-center gap-x-4 mt-2">
                          <p
                            className={classNames(
                              tier.featured ? 'text-gray-900' : 'text-white',
                              'text-4xl font-semibold tracking-tight',
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm">
                            <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                            <p
                              className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                            >{`Billed ${frequency.value}`}</p>
                          </div>
                        </div>
                        <a
                          href={tier.href}
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'bg-secondary shadow-sm hover:bg-primary focus-visible:outline-primary'
                              : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                            'rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                          )}
                        >
                          Buy this plan
                        </a>
                      </div>
                      <div className="mt-8 sm:mt-10 flow-root">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                              : 'divide-white/5 border-white/5 text-white',
                            '-my-2 divide-y border-t text-sm/6 lg:border-t-0',
                          )}
                        >
                          {tier.highlights.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured ? 'text-secondary' : 'text-gray-500',
                                  'h-6 w-5 flex-none',
                                )}
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-white lg:pt-14">
            <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
              <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                  Feature comparison
                </h2>

                <div className="space-y-16 mx-auto max-w-2xl">
                  {pricing.tiers.map((tier) => (
                    <div key={tier.id} className="border-gray-900/10 border-t">
                      <div
                        className={classNames(
                          tier.featured ? 'border-secondary' : 'border-transparent',
                          '-mt-px w-72 border-t-2 pt-10 md:w-80',
                        )}
                      >
                        <h3
                          className={classNames(
                            tier.featured ? 'text-secondary' : 'text-gray-900',
                            'text-sm/6 font-semibold',
                          )}
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-1 text-gray-600 text-sm/6">{tier.description}</p>
                      </div>

                      <div className="space-y-10 mt-10">
                        {pricing.sections.map((section) => (
                          <div key={section.name}>
                            <h4 className="font-semibold text-gray-900 text-sm/6">{section.name}</h4>
                            <div className="relative mt-6">
                              <div
                                aria-hidden="true"
                                className="sm:block right-0 absolute inset-y-0 hidden bg-white shadow-sm rounded-lg w-1/2"
                              />

                              <div
                                className={classNames(
                                  tier.featured ? 'ring-2 ring-secondary' : 'ring-1 ring-gray-900/10',
                                  'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                                )}
                              >
                                <dl className="divide-y divide-gray-200 text-sm/6">
                                  {section.features.map((feature) => (
                                    <div
                                      key={feature.name}
                                      className="flex justify-between items-center sm:grid sm:grid-cols-2 px-4 sm:px-0 py-3"
                                    >
                                      <dt className="pr-4 text-primary">{feature.name}</dt>
                                      <dd className="flex justify-end sm:justify-center items-center sm:px-4">
                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                          <span
                                            className={
                                              tier.featured ? 'font-semibold text-secondary' : 'text-gray-900'
                                            }
                                          >
                                            {feature.tiers[tier.name]}
                                          </span>
                                        ) : (
                                          <>
                                            {feature.tiers[tier.name] === true ? (
                                              <CheckIcon
                                                aria-hidden="true"
                                                className="mx-auto text-secondary size-5"
                                              />
                                            ) : (
                                              <XMarkIconMini
                                                aria-hidden="true"
                                                className="mx-auto text-secondary size-5"
                                              />
                                            )}

                                            <span className="sr-only">
                                              {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                            </span>
                                          </>
                                        )}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </div>

                              <div
                                aria-hidden="true"
                                className={classNames(
                                  tier.featured ? 'ring-2 ring-secondary' : 'ring-1 ring-gray-900/10',
                                  'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                                )}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="comparison-heading" className="lg:block hidden">
                <h2 id="comparison-heading" className="sr-only">
                  Feature comparison
                </h2>

                <div className="before:block gap-x-8 border-gray-900/10 grid grid-cols-4 border-t">
                  {pricing.tiers.map((tier) => (
                    <div key={tier.id} aria-hidden="true" className="-mt-px">
                      <div
                        className={classNames(
                          tier.featured ? 'border-secondary' : 'border-transparent',
                          'border-t-2 pt-10',
                        )}
                      >
                        <p
                          className={classNames(
                            tier.featured ? 'text-secondary' : 'text-primary',
                            'text-sm/6 font-semibold',
                          )}
                        >
                          {tier.name}
                        </p>
                        <p className="mt-1 text-gray-600 text-sm/6">{tier.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-16 -mt-6">
                  {pricing.sections.map((section) => (
                    <div key={section.name}>
                      <h3 className="font-semibold text-gray-900 text-sm/6">{section.name}</h3>
                      <div className="relative -mx-8 mt-10">
                        <div
                          aria-hidden="true"
                          className="before:block absolute inset-x-8 inset-y-0 gap-x-8 grid grid-cols-4"
                        >
                          <div className="bg-white shadow-sm rounded-lg size-full" />
                          <div className="bg-white shadow-sm rounded-lg size-full" />
                          <div className="bg-white shadow-sm rounded-lg size-full" />
                        </div>

                        <table className="relative border-separate border-spacing-x-8 w-full">
                          <thead>
                            <tr className="text-left">
                              <th scope="col">
                                <span className="sr-only">Feature</span>
                              </th>
                              {pricing.tiers.map((tier) => (
                                <th key={tier.id} scope="col">
                                  <span className="sr-only">{tier.name} tier</span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.features.map((feature, featureIdx) => (
                              <tr key={feature.name}>
                                <th
                                  scope="row"
                                  className="py-3 pr-4 w-1/4 font-normal text-gray-900 text-left text-sm/6"
                                >
                                  {feature.name}
                                  {featureIdx !== section.features.length - 1 ? (
                                    <div className="absolute inset-x-8 bg-gray-200 mt-3 h-px" />
                                  ) : null}
                                </th>
                                {pricing.tiers.map((tier) => (
                                  <td key={tier.id} className="relative px-4 py-0 w-1/4 text-center">
                                    <span className="relative py-3 size-full">
                                      {typeof feature.tiers[tier.name] === 'string' ? (
                                        <span
                                          className={classNames(
                                            tier.featured ? 'font-semibold text-secondary' : 'text-gray-900',
                                            'text-sm/6',
                                          )}
                                        >
                                          {feature.tiers[tier.name]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name] === true ? (
                                            <CheckIcon aria-hidden="true" className="mx-auto text-secondary size-5" />
                                          ) : (
                                            <XMarkIconMini
                                              aria-hidden="true"
                                              className="mx-auto text-gray-400 size-5"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <div
                          aria-hidden="true"
                          className="before:block absolute inset-x-8 inset-y-0 gap-x-8 grid grid-cols-4 pointer-events-none"
                        >
                          {pricing.tiers.map((tier) => (
                            <div
                              key={tier.id}
                              className={classNames(
                                tier.featured ? 'ring-2 ring-secondary' : 'ring-1 ring-primary',
                                'rounded-lg',
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
        <CTASection/>
        <div className="mx-auto sm:mt-56 px-6 lg:px-8 divide-y divide-gray-900/10 max-w-7xl">
          <h2 className="font-bold text-4xl text-gray-900 sm:text-5xl tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="space-y-8 mt-10 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="lg:gap-8 lg:grid lg:grid-cols-12 pt-8">
                <dt className="lg:col-span-5 font-semibold text-base/7 text-gray-900">{faq.question}</dt>
                <dd className="lg:col-span-7 mt-4 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>      
    </div>
  )
}
