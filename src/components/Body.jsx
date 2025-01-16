import {
  DocumentArrowDownIcon,
  GlobeAltIcon,
  AdjustmentsHorizontalIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
  LightBulbIcon
} from "@heroicons/react/20/solid";
import BodyApi from '../assets/bodyApi.png';
import Yo from '../assets/yo.png';
const features = [
  {
    name: "Seamless Tool Integration.",
    description:
      "APIs connect marketing platforms like CRMs, social media, and analytics tools into one unified ecosystem, ensuring everything works together smoothly.",
    icon: DocumentArrowDownIcon
  },
  {
    name: "Automation of Repetitive Tasks.",
    description:
      "Automate processes such as campaign management, lead tracking, and email delivery, saving time and boosting operational efficiency.",
    icon: GlobeAltIcon
  },
  {
    name: "Real-Time Personalization.",
    description:
      "APIs enable real-time data analysis to create personalized campaigns tailored to the behavior, interests, and needs of each customer.",
    icon: AdjustmentsHorizontalIcon
  },
  {
    name: "Access to Powerful Insights.",
    description:
      "Advanced analytics APIs allow you to monitor campaign performance in real-time, gain actionable insights, and adjust strategies quickly.",
    icon: TableCellsIcon
  },
  {
    name: "Limitless Scalability.",
    description:
      "APIs offer a flexible, scalable solution that grows with your business, allowing you to add new functionalities as your needs evolve.",
    icon: PresentationChartBarIcon
  },
  {
    name: "Constant Innovation.",
    description:
      "By integrating APIs, you can access emerging technologies like artificial intelligence, chatbots, and advanced automation, staying ahead of the competition. ",
    icon: LightBulbIcon
  }
];

export function Comp() {
  return <div className="bg-text py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="font-semibold text-base/7 text-secondary">
            APIs
          </h2>
          <p className="mt-2 font-semibold text-4xl text-pretty text-primary sm:text-balance sm:text-5xl tracking-tight">
            Revolutionizing Digital Marketing with APIs
          </p>
          <p className="mt-6 text-lg/8 text-primary">
            Discover how APIs are transforming the way businesses manage,
            automate, and optimize their digital marketing strategies.
          </p>
        </div>
      </div>
      <div className="relative pt-16 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <img alt="App screenshot" src={BodyApi} width={2432} height={1442} className="shadow-xl mb-[-12%] rounded-xl ring-1 ring-white/10" />
          <div aria-hidden="true" className="relative">
            <div className="bottom-0 absolute -inset-x-0 bg-gradient-to-t from-text pt-[10%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 sm:mt-20 md:mt-24 px-6 lg:px-8 max-w-7xl">
        <dl className="gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-base/7 text-primary">
          {features.map(feature =>
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-secondary">
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
    </div>;
}

export function CTASection() {
  return <div className="bg-white">
      <div className="mx-auto sm:px-6 lg:px-8 py-24 sm:py-32 max-w-10xl">
        <div className="relative bg-primary shadow-2xl px-6 sm:px-16 py-24 sm:rounded-xl text-center overflow-hidden isolate">
          <h2 className="font-semibold text-4xl text-balance text-white sm:text-5xl tracking-tight">
            Boost Your Growth Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-300 text-lg/8 text-pretty">
            Take your marketing strategy to the next level with our powerful
            digital marketing APIs. Automate processes, improve efficiency,
            and achieve outstanding results—all in one place.
          </p>
          <h2 className="mx-auto mt-6 max-w-xl text-pretty text-secondary text-xl">
            Why wait? Your next big win is just a click away.
          </h2>
          <div className="flex justify-center items-center gap-x-6 mt-10">
            <a href="/signin" className="bg-secondary hover:bg-textH shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-l text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get started
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" aria-hidden="true" className="top-1/2 left-1/2 -z-10 absolute -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] size-[64rem]">
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#0B192C" />
                <stop offset={1} stopColor="#FF6500" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>;
}
export  function LogoClouds() {
  return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <h2 className="font-semibold text-center text-lg/8 text-primary">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
          <img
            alt="Transistor"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-20 text-primary object-contain"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-20 object-contain"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 w-full max-h-20 object-contain"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-20 object-contain"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

const people = [
  {
    name: "Osmel Rubido",
    role: "Ultra Mega Senior Designer",
    imageUrl:
      Yo,
    xUrl: "#",
    linkedinUrl: "#"
  }
  // More people...
];

export function OurTeam() {
  return <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-semibold text-4xl text-balance text-secondary sm:text-5xl tracking-tight">
            Meet our team
          </h2>
          <p className="mt-6 text-lg/8 text-text">
            <strong>The minds behind your marketing success</strong>
          </p>
          <p className="mt-2 text-lg/8 text-text">
            Our team is a group of passionate marketing experts, developers,
            and creatives dedicated to helping businesses thrive in the
            digital world. With years of experience and a shared vision for
            innovation, we work together to deliver outstanding results for
            our clients.
          </p>
        </div>
        <ul role="list" className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-20 max-w-2xl lg:max-w-none">
          {people.map(person =>
            <li
              key={person.name}
              className="bg-gray-800 hover:bg-gray-700 px-8 py-10 rounded-2xl transition-all duration-200 ease-out"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto rounded-full md:size-56 size-48"
              />
              <h3 className="mt-6 font-semibold text-base/7 text-secondary tracking-tight">
                {person.name}
              </h3>
              <p className="text-gray-400 text-sm/6">
                {person.role}
              </p>
              <ul role="list" className="flex justify-center gap-x-6 mt-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-secondary hover:text-textH"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-secondary hover:text-textH"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>;
}
export function OurMision() {
  return <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-semibold text-base/7 text-secondary">About us</p>
          <h1 className="mt-2 font-semibold text-4xl text-pretty text-primary sm:text-5xl tracking-tight">
            Empowering businesses with the power of digital marketing
          </h1>
          <p className="mt-6 text-balance text-primary text-xl/8">
            Discover how our digital marketing solutions, powered by
            cutting-edge APIs, are designed to simplify, optimize, and scale
            your campaigns. Our mission is to help you connect with your
            audience, increase your impact, and grow your business
            sustainably.
          </p>
        </div>
        <section className="lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div className="lg:pr-8">
            <h2 className="font-semibold text-2xl text-gray-900 text-pretty tracking-tight">
              Our mission
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              <strong>
                Simplifying digital marketing for every business
              </strong>
              <br />
              In a world where digital marketing is becoming increasingly complex, we make it simple. Our goal is to empower businesses of all sizes with tools and services that automate processes, optimize strategies, and maximize results. From advanced analytics APIs to digital advertising solutions, we help businesses make data-driven decisions and build authentic connections with their customers.
            </p>
            <br />
            <h3>Our Values</h3>
            <p className="mt-8 text-base/7 text-gray-600">
              <strong>Innovation:</strong> Leveraging cutting-edge technology to deliver effective and accessible digital marketing services.
              <br />
              <strong>
                Transparency:
              </strong> Giving you complete control over your data and results at all times.
              <br />
              <strong>
                Growth:
              </strong> We believe in growing together—your success is our success.
            </p>
          </div>
          <div className="lg:row-span-2 lg:-mr-16 xl:mr-auto pt-16">
            <div className="gap-4 lg:gap-4 xl:gap-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 -mx-8 sm:-mx-16 lg:mx-0">
              <div className="shadow-xl rounded-xl overflow-hidden -outline-offset-1 aspect-square outline outline-1 outline-black/10">
                <img alt="" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90" className="block object-cover size-full" />
              </div>
              <div className="shadow-xl -mt-8 lg:-mt-40 rounded-xl overflow-hidden -outline-offset-1 aspect-square outline outline-1 outline-black/10">
                <img alt="" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90" className="block object-cover size-full" />
              </div>
              <div className="shadow-xl rounded-xl overflow-hidden -outline-offset-1 aspect-square outline outline-1 outline-black/10">
                <img alt="" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90" className="block object-cover size-full" />
              </div>
              <div className="shadow-xl -mt-8 lg:-mt-40 rounded-xl overflow-hidden -outline-offset-1 aspect-square outline outline-1 outline-black/10">
                <img alt="" src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90" className="block object-cover size-full" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 max-lg:mt-16">
            <p className="font-semibold text-base/7 text-gray-500">
              Our Achievements in Numbers
            </p>
            <hr className="border-gray-200 mt-6 border-t" />
            <dl className="gap-x-8 gap-y-4 grid grid-cols-1 sm:grid-cols-2 mt-6">
              <div className="flex flex-col gap-y-2 border-gray-200 pb-4 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Total revenue increase generated for our clients.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  $<span>250</span>M+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-gray-200 pb-4 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Businesses that trust us.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>50</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-gray-200 max-sm:pb-4 max-sm:border-b max-sm:border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Marketing campaigns managed.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>3</span>M+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-gray-600 text-sm/6">
                  Conversions generated through our APIs.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>500</span>M+
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>;
}
