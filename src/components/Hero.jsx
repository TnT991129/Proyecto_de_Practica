import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  PuzzlePieceIcon,
  Bars3Icon,
  Cog8ToothIcon,
  ArrowTrendingUpIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/icons/logo-2.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const products = [
  {
    name: "Presencia Web Profecional",
    description: "Atrae clientes las 24 horas con tu vitrina digital.",
    href: '/analytics',
    icon: PuzzlePieceIcon
  },
  {
    name: "Mantenimiento Web Sin Preocupaciones",
    description: "Nos encargamos de que todo funcione perfectamente, tú concéntrate en tu negocio.",
    href: "/engagement",
    icon: Cog8ToothIcon
  },
  {
    name: "Posicionamiento en Google (SEO)",
    description: "Haz que los turistas te encuentren primero cuando busquen en La Habana o Cuba.",
    href: "/security",
    icon: ArrowTrendingUpIcon
  },
  
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

  return <header className="top-0 z-50 absolute inset-x-0 ">
      <nav aria-label="Global" className="flex fixed justify-between bg-zinc-950 bg-opacity-80 items-center mx-auto lg:px-52 lg:p-3 p-2 pl-3 w-full">
        <div className="flex lg:flex-1">
          <Link to="/#home" className='flex '>
            <motion.img 
            initial={{opacity:0, x: -20}}
            animate={{opacity:1, x:0 }}
            transition={{duration:.8, ease:"easeInOut"}}
            src={logo} className='md:w-14 w-10 p-0 m-0'/>
            <div className='flex flex-col text-white'>
              <motion.h1 
              initial={{opacity:0, x: -20}}
              animate={{opacity:1, x:0 }}
              transition={{duration:1, delay: .5 , ease:"easeInOut"}}
              className='md:text-3xl font-bold'>Nexus</motion.h1>
              <motion.h1 
              initial={{opacity:0, y: -30}}
              animate={{opacity:1, y:0 }}
              transition={{duration:1, delay: 1 , ease:"easeInOut"}}
              className=' md:font-bold '>Web Studio</motion.h1>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="mr-3 text-secondary size-8" />
          </button>
        </div>
        <motion.PopoverGroup
        initial={{opacity:0, y: -40}}
        animate={{opacity:1, y:0 }}
        transition={{duration:1, delay: .5, ease:"easeInOut"}}

         className="lg:flex lg:gap-x-12 hidden">
          <Popover className="relative">
            <PopoverButton 
            className="flex items-center gap-x-1 font-bold text-l text-text hover:text-secondary transition-colors duration-200 ease-in-out">
              Servicios
              <ChevronDownIcon aria-hidden="true" className="flex-none text-text size-5" />
            </PopoverButton>

            <PopoverPanel transition className="top-full -left-8 z-10 absolute bg-white data-[closed]:opacity-0 shadow-lg mt-3 rounded-3xl ring-1 ring-gray-900/5 w-screen max-w-md transition data-[closed]:translate-y-1 data-[enter]:duration-300 data-[leave]:duration-150 overflow-hidden data-[enter]:ease-out data-[leave]:ease-in">
              <div className="p-4">
                {products.map(item =>
                  <motion.div
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
                  </motion.div>
                )}
              </div>
              
            </PopoverPanel>
          </Popover>

          <Link to="/prices" className="font-bold text-l text-text hover:text-secondary transition-colors duration-00 ease-in-out">
            Precios
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 font-bold text-l text-text hover:text-secondary transition-colors duration-300 ease-in-out">
              Sobre Nosotros
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
            Contacto
          </Link>
        </motion.PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-10 fixed inset-0" />
        <DialogPanel className="right-0 z-10 fixed inset-y-0 flex flex-col justify-between bg-primary sm:ring-1 sm:ring-gray-300/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 rounded-md text-text text-transparent">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-16 flow-root">
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
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>;
}



import home from '../assets/home.png'
export function Hero() {
  
    return <div id='home' className="relative bg-zinc-950 flex pt-10 md:pt-32 lg:pt-34 items-center isolate min-h-screen">
        <svg aria-hidden="true" className="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-10 absolute inset-0 hover:stroke-textH w-full h-full stroke-secondary">
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
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
              initial={{opacity:0, x: -40}}
              animate={{opacity:1, x:0 }}
              transition={{duration:.8 , delay: .4, ease:"easeInOut"}}
              className="text-xl sm:text-3xl font-bold text-secondary mb-2">
                Nexus Web Studio
              </motion.h1>
              <motion.h2 
              initial={{opacity:0, x: -40}}
              animate={{opacity:1, x:0 }}
              transition={{duration:.8, delay: .6, ease:"easeInOut"}}
              className="text-lg sm:text-4xl md:text-6xl font-serif font-bold text-white mb-2 md:mb-6 leading-tight">
                Atrae Más Clientes Potenciales con una Web Profesional
              </motion.h2>
              <motion.p 
              initial={{opacity:0, x: -40}}
              animate={{opacity:1, x:0 }}
              transition={{duration:.8, delay: 1, ease:"easeInOut"}}
              className="text-xs sm:text-xl text-text mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
               Nos especializamos en el desarrollo de sitios web de alto rendimiento, con diseños modernos y funcionales, adaptados a las necesidades de empresas y emprendedores.
              </motion.p>
              <motion.div 
              initial={{opacity:0, y: -40}}
              animate={{opacity:1, y:0 }}
              transition={{duration:1, delay: 1, ease:"easeInOut"}}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:gap-4 gap-2 md:gap-6">
                <Link to="../App.jsx" className="bg-secondary hover:bg-textH shadow-sm px-5 sm:py-3 py-2 rounded-md font-bold text-white transition-colors duration-150 ease-linear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textH w-full sm:w-auto text-center">
                  Empieza Hoy
                </Link>
                <Link to="../App.jsx" className="font-bold text-secondary hover:text-textH transition-colors duration-150 w-full sm:w-auto text-center">
                  Explora Nuestras Ofertas
                </Link>
              </motion.div>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <motion.img
              initial={{opacity:0, x: 40}}
              animate={{opacity:1, x:0 }}
              transition={{duration:1, delay: 1, ease:"easeInOut"}} 
                alt="Nexus Web Studio" 
                src={home} 
                className="rounded-2xl max-w-full sm:max-w-md lg:max-w-lg xl:max-w-2xl w-full h-auto shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>;
}