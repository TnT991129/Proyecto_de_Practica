import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/20/solid";
import imgS from "../../../assets/Stripe.png";

const features = [
  {
    name: 'Easy Integration:',
    description:
      'Its flexible API allows quick and customized integration of payment methods into websites and applications.',
    icon:  ServerIcon,
  },
  {
    name: 'Advanced Security:.',
    description: 'Stripe provides fraud protection systems and compliance with international regulations to ensure secure transactions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Global Expansion:',
    description: 'Stripe supports multiple currencies and payment methods, making it easier for businesses to expand into international markets.',
    icon: CloudArrowUpIcon,
  },
]

export function BodySec() {
  return (
    <div className="bg-primary sm:my-5 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-base/7 text-secondary">Stripe</h2>
              <p className="mt-2 font-semibold text-4xl text-pretty text-text sm:text-5xl tracking-tight">
                Why Stripe Is Essential for the Growth of Your Digital Business
              </p>
              <p className="mt-6 text-lg/8 text-text">
                Discover the key advantages that make Stripe the best choice for managing online payments securely, efficiently, and at scale.
              </p>
              <dl className="space-y-8 mt-10 max-w-xl lg:max-w-none text-base/7 text-text">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-secondary">
                      <feature.icon aria-hidden="true" className="top-1 left-1 absolute text-secondary size-5" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={imgS}
            width={2432}
            height={1442}
            className="shadow-xl md:-ml-4 lg:-ml-0 rounded-xl ring-1 ring-gray-400/10 w-[48rem] sm:w-[57rem] max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
