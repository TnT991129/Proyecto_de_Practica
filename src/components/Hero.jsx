import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'
const products = [
  {
    name: "Analytics API",
    description: "Google Analytics for traffic and behavior metrics",
    href: '/analytics',
    icon: ChartPieIcon
  },
  {
    name: "Engagement API",
    description: "Twilio for communication and engagement.",
    href: "/engagement",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Security API",
    description: "Stripe security and payments.",
    href: "/security",
    icon: FingerPrintIcon
  },
  {
    name: "Integrations API",
    description: "Integromat for integrations",
    href: "/integration",
    icon: SquaresPlusIcon
  },
  {
    name: "Automations API",
    description: "Zapier for automations",
    href: "/automation",
    icon: ArrowPathIcon
  }
];

const company = [
  {
    name: "About us",
    href: "/about",
    description:
      "We empower businesses with innovative digital marketing APIs to optimize their online presence and grow."
  },
  {
    name: "Support",
    href: "/support",
    description:
      "Access documentation, FAQs, and assistance to make the most of our APIs."
  },
  
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <header className="top-0 z-50 absolute inset-x-0 bg-primary bg-opacity-30">
      <nav aria-label="Global" className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex -m-1.5 p-1.5">
            <img alt="" src={logo} className="w-auto h-8" />
            <span className="mt-1 ml-3 font-extrabold text-white">Home</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="mr-3 text-secondary size-8" />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-bold text-l text-text hover:text-secondary transition-colors duration-200 ease-in-out">
              Products
              <ChevronDownIcon aria-hidden="true" className="flex-none text-text size-5" />
            </PopoverButton>

            <PopoverPanel transition className="top-full -left-8 z-10 absolute bg-white data-[closed]:opacity-0 shadow-lg mt-3 rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md transition data-[closed]:translate-y-1 data-[enter]:duration-300 data-[leave]:duration-150 overflow-hidden data-[enter]:ease-out data-[leave]:ease-in">
              <div className="p-4">
                {products.map(item =>
                  <div
                    key={item.name}
                    className="relative flex gap-x-6 hover:bg-gray-200 p-4 rounded-lg text-sm/6 group"
                  >
                    <div className="group-hover:bg-white flex flex-none justify-center items-center bg-gray-50 mt-1 rounded-lg size-11">
                      <item.icon
                        aria-hidden="true"
                        className="group-hover:text-secondary text-primary transition-colors duration-200 ease-in-out size-6"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-bold text-primary hover:text-secondary transition-colors duration-200 ease-in-out"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
            </PopoverPanel>
          </Popover>

          <Link to="/prices" className="font-bold text-l text-text hover:text-secondary transition-colors duration-00 ease-in-out">
            Prices
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-bold text-l text-text hover:text-secondary transition-colors duration-300 ease-in-out">
              Company
              <ChevronDownIcon aria-hidden="true" className="flex-none text-text size-5" />
            </PopoverButton>

            <PopoverPanel transition className="top-full -left-8 z-10 absolute bg-white data-[closed]:opacity-0 shadow-lg mt-3 p-4 rounded-3xl ring-1 ring-gray-900/5 w-96 transition data-[closed]:translate-y-1 data-[enter]:duration-300 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
              {company.map(item =>
                <div
                  key={item.name}
                  className="relative hover:bg-gray-50 p-4 rounded-lg"
                >
                  <Link
                    to={item.href}
                    className="block font-bold text-primary text-sm/6 hover:text-secondary transition-colors duration-200 ease-in-out"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-primary text-sm/6">
                    {item.description}
                  </p>
                </div>
              )}
            </PopoverPanel>
          </Popover>
          <Link to="/contact" className="font-bold text-l text-text hover:text-secondary transition-colors duration-00 ease-in-out">
            Contact
          </Link>
        </PopoverGroup>
        <div className="lg:flex lg:flex-1 lg:justify-end gap-2 hidden">
          <Link to="/login" className="flex justify-center items-center rounded-lg w-20 h-10 font-bold text-sm/6 text-text">
            Log in
          </Link>
          <Link to="/signin" className="flex justify-center items-center bg-secondary rounded-lg w-20 h-10 font-bold text-sm/6 text-white">
            Sign in
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 flex flex-col justify-between bg-primary sm:ring-1 sm:ring-gray-300/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="w-auto h-8" />
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 rounded-md text-text text-transparent">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary">
                <div className="space-y-2 py-6">
                  {products.map(item =>
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-x-6 hover:bg-secondary -mx-3 p-3 rounded-lg font-bold text-base/7 text-text group"
                    >
                      <div className="group-hover:bg-white flex flex-none justify-center items-center bg-gray-50 rounded-lg size-11">
                        <item.icon
                          aria-hidden="true"
                          className="group-hover:text-secondary text-primary size-6"
                        />
                      </div>
                      {item.name}
                    </Link>
                  )}
                </div>
                <div className="space-y-2 py-6">
                  <Link to="/prices" className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-bold text-base/7 text-text hover:text-secondary">
                    Prices
                  </Link>

                  {company.map(item =>
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-bold text-base/7 text-text hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  )}
                  <Link to="/contact" className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-bold text-base/7 text-text hover:text-secondary">
                    Contact
                  </Link>
                </div>

                <br />
                <div className="py-6">
                  <Link to="/login" className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-bold text-base/7 text-text hover:text-secondary">
                    Log in
                  </Link>
                  <Link to="/signin" className="block bg-secondary hover:bg-textH -mx-3 px-3 py-2.5 rounded-lg font-bold text-base/7 text-white">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>;
}





import home from '../assets/home.png'
export function Hero() {
    return <div className="relative bg-primary pt-14 isolate">
        <svg aria-hidden="true" className="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-10 absolute inset-0 hover:stroke-textH size-full stroke-secondary">
          <defs>
            <pattern x="50%" y={-1} id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="transition-color duration-300 ease-linear overflow-visible fill-secondary hover:fill-white">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="lg:flex lg:place-items-center lg:gap-x-10 mx-auto lg:px-1 py-20 lg:py-30 sm:p-20 max-w-7xl">
          <div className="lg:flex-auto mx-auto py-3">
            <h1 className="mt-10 font-bold text-5xl text-pretty text-secondary sm:text-7xl tracking-tight">
              Powerful APIs to Supercharge Your Business
            </h1>
            <p className="mt-8 font-medium text-lg text-pretty text-text sm:text-xl/8">
              Integrate our cutting-edge APIs to automate processes,
              optimize digital marketing strategies, and scale your online
              presence effortlessly. Perfect for businesses ready to
              innovate and grow.
            </p>
            <div className="flex items-center gap-x-6 mt-10">
              <Link to="../App.jsx" className="bg-secondary hover:bg-textH shadow-sm px-3.5 py-2.5 rounded-md font-bold text-sm text-white transition-colors duration-150 ease-linear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textH">
                Get started
              </Link>
              <Link to="../App.jsx" className="font-bold text-secondary text-sm/6">
                Explore Our APIs 
              </Link>
            </div>
          </div>
          <div className="">
            <foreignObject>
              <img alt="" src={home} className="rounded-2xl" />
            </foreignObject>
          </div>
        </div>
      </div>;
}
