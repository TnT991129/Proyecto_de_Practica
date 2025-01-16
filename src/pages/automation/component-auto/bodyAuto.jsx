import {
  ArrowPathIcon,
  LockClosedIcon,
  RocketLaunchIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Instant Campaign Deployment",
    description:
      "Launch multi-channel marketing campaigns with a single API call. Schedule, automate, and manage campaigns without manual effort.",
    href: "#",
    icon: RocketLaunchIcon
  },
  {
    name: "Secure Data Handling",
    description:
      "Protect customer data with advanced encryption and GDPR-compliant security measures, ensuring safe and reliable data transfers.",
    href: "#",
    icon: LockClosedIcon
  },
  {
    name: "Automated Workflow Queues",
    description:
      "Easily manage and automate repetitive tasks with scalable queue systems, keeping your marketing operations efficient and organized.",
    href: "#",
    icon: ArrowPathIcon
  }
];

export default function BodyAuto() {
  return <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold text-base/7 text-secondary">
            Automate Smarter
          </h2>
          <p className="mt-2 font-semibold text-4xl text-pretty text-white sm:text-5xl lg:text-balance tracking-tight">
            Everything you need to streamline your marketing
          </p>
          <p className="mt-6 text-gray-300 text-lg/8">
            Simplify and accelerate your marketing operations with
            Inteegrations. Our API connects your favorite tools, automates
            complex workflows, and optimizes data management—helping you focus
            on growing your business.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
          <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
            {features.map(feature =>
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 font-semibold text-base/7 text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="flex-none text-secondary size-5"
                  />
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base/7 text-text">
                  <p className="flex-auto">
                    {feature.description}
                  </p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="font-semibold text-secondary text-sm/6"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>;
}
