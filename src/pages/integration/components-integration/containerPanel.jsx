import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Instant Data Sync",
    description:
      "Automatically sync data between all your marketing platforms in real-time, ensuring consistency and accuracy across campaigns.",
    icon: CloudArrowUpIcon
  },
  {
    name: "Enterprise-Grade Security",
    description:
      "Protect your data with advanced encryption and secure authentication protocols. Inteegrations is fully compliant with industry standards to keep your business safe.",
    icon: LockClosedIcon
  },
  {
    name: "Automated Backups",
    description:
      "Enjoy peace of mind with automated backups of all your marketing data, ensuring you never lose critical information.",
    icon: ServerIcon
  }
];

export default function ContPanel() {
  return <div className="bg-white py-24">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-10xl">
        <div className="relative bg-gray-900 px-6 sm:px-10 xl:px-24 py-20 sm:py-24 lg:py-24 sm:rounded-3xl overflow-hidden isolate">
          <div className="lg:items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-y-0 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <div className="lg:row-start-2 lg:max-w-xl">
              <h2 className="font-semibold text-3xl text-balance text-white sm:text-4xl tracking-tight">
                Boost your marketing performance.
              </h2>
              <p className="mt-6 text-gray-300 text-lg/8">
                <strong>
                  Start integrating with Inteegrations today.
                </strong> 
                <br />
                Simplify your digital marketing workflows with Inteegrations. Our powerful API seamlessly connects your favorite marketing tools, automates repetitive tasks, and delivers real-time insights to help you make smarter decisions and scale your business faster.
              </p>
            </div>
            <img alt="Product screenshot" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" width={2432} height={1442} className="relative -z-20 lg:row-span-4 shadow-xl rounded-xl ring-1 ring-white/10 lg:w-[64rem] min-w-full max-w-xl lg:max-w-none" />
            <div className="lg:border-white/10 lg:row-start-3 lg:mt-10 lg:pt-10 lg:border-t max-w-xl lg:max-w-md">
              <dl className="space-y-8 max-w-xl lg:max-w-none text-base/7 text-gray-300">
                {features.map(feature =>
                  <div key={feature.name} className="relative">
                    <dt className="inline-block ml-9 font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="top-1 left-1 absolute text-secondary size-5"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
          <div aria-hidden="true" className="top-1/2 lg:top-auto lg:bottom-[-12rem] left-12 -z-10 absolute blur-3xl transform-gpu lg:transform-gpu -translate-y-1/2 lg:translate-y-0 pointer-events-none">
            <div style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} className="bg-gradient-to-tr from-primary to-secondary opacity-25 w-[72.1875rem] aspect-[1155/678]" />
          </div>
        </div>
      </div>
    </div>;
}
