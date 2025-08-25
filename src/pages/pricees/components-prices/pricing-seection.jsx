'use client'

import { useState } from 'react'
import {  Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { CTASection } from '../../../components/Body'

const pricing = {
  
  tiers: [
    {
      name: 'Plan Clásico',
      id: 'tier-starter',
      href: '#',
      featured: false,
      description: 'Personas que están comenzando, con presupuesto limitado, pero que necesitan una vitrina básica en internet.',
      price: { unique: '$150-$200' },
      highlights: ['Página web de 3‑4 secciones (Inicio, Habitaciones, Contacto, Servicios)',  'Galería de fotos optimizada', 'Posicionamiento en Google Maps', 'Traduccion de idiomas ( Ingles + Español )', 'Optimización básica de velocidad.'],
    },
    {
      name: 'Plan Avanzado',
      id: 'tier-scale',
      href: '#',
      featured: true,
      description: 'Paladares, casas particulares, bares. Que ya tienen clientes pero quieren escalar.',
      price: { unique: '$280 - $380' },
      highlights: [
        'Diseño web personalizado y único (HTML/CSS/JS o React) para máx. velocidad.',
        '7 secciones (Las básicas + Blog/Noticias + Testimonios).',
        'Hosting Premium internacional incluido por 1 año (ej: Vercel, Netlify, Hostinger).',
        'Integración con Google Maps + WhatsApp Business.',
        'SEO Técnico Básico implementado (meta tags, sitemap, optimización).',
        'Botón de reservas/pedidos destacado.',
        'Entrega: 3-4 semanas.'
      ],
    },
    {
      name: 'Plan Premium',
      id: 'tier-growth',
      href: '#',
      featured: false,
      description: 'Hoteles pequeños, restaurantes de lujo, productores que quieren vender online.',
      price: {unique: '$550 - $750'},
      highlights: ['Diseño web a medida y complejo (con animaciones, interacciones).', 'Sistema de Reservas Online integrado (calendario, confirmación).', 'Tienda Online (E-commerce) para venta de productos/servicios.', 'Blog integrado para contenido marketing.', 'SEO Avanzado (Investigación de keywords, estructura optimizada).', 'Panel de administración COMPLETO (CMS como WordPress o Strapi para total control).', "Mantenimiento y Soporte técnico por 3 meses incluido."],
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

  return (
    <div className="bg-white">
      <main>
        <div className="overflow-hidden isolate">
          <div className="bg-primary py-16 sm:pt-12 lg:pb-0 flow-root">
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl font-semibold text-5xl text-balance text-center text-white sm:text-6xl tracking-tight">
                  Precios que se adaptan a su negocio
                </h1>
                <p className="mx-auto mt-6 max-w-2xl font-medium text-center text-gray-400 text-lg text-pretty sm:text-xl/8">
                  Cada negocio es único. Desarrollamos soluciones a medida para objetivos específicos, garantizando el mejor retorno de inversión. Contáctanos para un presupuesto personalizado y sin compromiso
                </p>
                {/* Eliminado el selector de frecuencia */}
              </div>
              <div className="relative  gap-y-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 lg:-mb-14 max-w-md lg:max-w-none">
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
                  className="lg:block lg:top-4 z-90  lg:bottom-0 lg:absolute lg:inset-x-px hidden lg:bg-gray-800/80 lg:rounded-t-2xl lg:ring-1 lg:ring-white/10"
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
                            {/* Mostrar solo el precio único */}
                            {typeof tier.price === 'string' || typeof tier.price === 'number'
                              ? tier.price
                              : tier.price?.unique || tier.price?.monthly || tier.price?.annually}
                          </p>
                          <div className="text-sm">
                            <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                            <p
                              className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                            >Pago único</p>
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
                          Comprar Plan
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
