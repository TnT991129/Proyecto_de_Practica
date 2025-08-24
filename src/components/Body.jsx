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
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const features = [
  {
    name: " Primera Impresión Digital",
    description:
      "Tu negocio se juzga primero online. Creamos webs que generan confianza y enamoran a primera vista.",
    icon: DocumentArrowDownIcon
  },
  {
    name: "Competencia con Google",
    description:
      "Si no apareces en las primeras búsquedas, no existes para el turista. La visibilidad online es crucial.",
    icon: GlobeAltIcon
  },
  {
    name: "Atención 24/7 Automatizada",
    description:
      "Tu web responde consultas automáticamente a cualquier hora, capturando clientes incluso mientras duermes.",
    icon: AdjustmentsHorizontalIcon
  },
  {
    name: " Digitalización de Operaciones",
    description:
      "Automatiza reservas, consultas y actualizaciones para enfocarte en atender clientes, no en tareas administrativas.",
    icon: TableCellsIcon
  },
  {
    name: "Tarjeta de Presentación Digital",
    description:
      "Tu web es tu principal herramienta de marketing: un link profesional que centraliza toda tu información.",
    icon: PresentationChartBarIcon
  },
  {
    name: " Inversión Rentable",
    description:
      "Un sitio web se paga solo con pocas ventas. Es tu empleado de marketing más eficiente: trabaja 24/7 sin descanso.",
    icon: LightBulbIcon
  }
];

export function Comp() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
          initial={{opacity:0, scale: .7, y:10}}
          whileInView={{opacity:1, scale: 1, y:0}}
          transition={{duration:1, ease: "easeIn"}}
          className="text-base font-semibold leading-7 text-secondary">
            Importancia de Nuestros Servicios
          </motion.h2>
          <motion.p
          initial={{opacity:0, scale: .7, y:10}}
          whileInView={{opacity:1, scale: 1, y:0}}
          transition={{duration:1, ease: "easeIn", delay:.1}}
           className=" text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Si no tienes un sitio web, ¿cómo te encuentran?
          </motion.p>
          <motion.p 
          initial={{opacity:0, scale: .7, y:10}}
          whileInView={{opacity:1, scale: 1, y:0}}
          transition={{duration:1, ease: "easeIn", delay:.13}}

          className="mt-2 text-sm leading-2 text-gray-600 max-w-2xl mx-auto">
            La decisión de visitarte se toma en Google. Si no estás ahí, ya perdiste.
          </motion.p>
        </div>
        {/* Grid de características */}
        <div className="mx-auto mt-10 max-w-7xl sm:mt-20 lg:mt-24">
  <div className="mx-auto max-w-2xl lg:max-w-none">
    <dl className="grid max-w-xl  sm:grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
      {features.map((feature, idx) => (
        <motion.div 
          initial={{opacity:0, scale: .9, y:35}}
          whileInView={{opacity:1, scale: 1, y:0}}
          transition={{duration:.3, ease: "easeInOut", delay: 0.1 + idx * 0.14}}
          key={feature.name}
          className="flex flex-col p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
        >
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            {feature.name}
          </dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p className="flex-auto">{feature.description}</p>
          </dd>
        </motion.div>
      ))}
    </dl>
  </div>
</div>
      </div>
    </div>
  );
}

export function CTASection() {
  return <div className="bg-white">
      <div className="mx-auto sm:px-6 lg:px-8 py-24 sm:py-32 max-w-10xl">
        <div className="relative bg-primary shadow-2xl px-6 sm:px-16 py-24 sm:rounded-xl text-center overflow-hidden isolate">
          <h2 className="font-semibold text-4xl text-balance text-white sm:text-5xl tracking-tight">
            Impulsa tu crecimiento hoy
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-300 text-lg/8 text-pretty">
            Diseño web a medida que convierte visitas en clientes. ¡Impulsa tu presencia digital!
          </p>
          <h2 className="mx-auto mt-6 max-w-xl text-pretty text-secondary text-xl">
            ¿Por qué esperar? Tu próxima gran victoria está a un clic de distancia.
          </h2>
          <div className="flex justify-center items-center gap-x-6 mt-10">
            <a href="/signin" className="bg-secondary hover:bg-textH shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-l text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Empieza Ahora
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

import {  useState } from 'react';

export function LogoClouds() {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isPaused) return;

    let animationFrame;
    let scrollAmount = window.innerWidth < 640 ? 0.5 : 1;

    function scrollCarousel() {
      if (carousel && !isPaused) {
        carousel.scrollLeft += scrollAmount;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollCarousel);
    }
    
    animationFrame = requestAnimationFrame(scrollCarousel);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const businessTypes = [
    { name: "Hostales", icon: "🏨", description: "Alojamientos con encanto" },
    { name: "Bares", icon: "🍸", description: "Ambientes únicos" },
    { name: "Restaurantes", icon: "🍽️", description: "Gastronomía auténtica" },
    { name: "Taxistas", icon: "🚕", description: "Transporte confiable" },
    { name: "Mipymes", icon: "🏪", description: "Negocios locales" },
    { name: "Galerías", icon: "🖼️", description: "Arte y cultura" },
    { name: "Cafeterías", icon: "☕", description: "Momento cafetero" },
    { name: "Artesanos", icon: "🧵", description: "Creaciones únicas" }
  ];

  const items = [...businessTypes, ...businessTypes];

  return (
    <div className="relative bg-zinc-950 flex flex-col pt-20 sm:pt-28 md:pt-32 lg:pt-44 overflow-hidden items-center isolate">
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
      {/* Encabezado */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-6">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
          Trabajamos con todo tipo de negocios
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          Especialistas en potenciar negocios con soluciones digitales a medida
        </p>
      </div>

      {/* Carrusel */}
      <div 
        ref={carouselRef}
        className="overflow-hidden w-full py-4 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div 
          className="flex w-max"
          style={{ animation: `scroll 120s linear infinite`, animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center mx-2 sm:mx-4 min-w-[clamp(140px,20vw,200px)] p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-zinc-950 hover:border-secondary transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm sm:text-lg text-white text-center mb-1">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-secondary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animación */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50%)); }
          }
        `}
      </style>
    </div>
  );
}
const people = [
  {
    name: "Osmel Rubido",
    role: "CEO & Founder and Frontend Developer",
    imageUrl:
      Yo,
    xUrl: "#",
    linkedinUrl: "#"
  }
  // More people...
];

export function OurTeam() {
  return <div className="bg-primary py-28 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl text-center">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-semibold text-2xl text-balance text-secondary sm:text-5xl tracking-tight">
            Conozca a nuestro equipo
          </h2>
          <p className="mt-3 text-lg/8 text-text">
            <strong>Las mentes detrás del exito del negocio</strong>
          </p>
          <p className="mt-2 text-md text-left text-text">
            Detrás de Nexus Web Studio hay una pasión inquebrantable por el diseño web y un profundo entendimiento del mercado turístico cubano. No somos una gran corporación impersonal; somos un equipo especializado que combina expertise técnico de vanguardia con una mentalidad estratégica.

Trabajamos con una red de colaboradores (diseñadores y especialistas en marketing digital) para ofrecer una solución integral. Esta flexibilidad nos permite reunir el talento ideal para cada proyecto, garantizando resultados excepcionales sin la burocracia de una gran agencia.

Nuestra visión es clara: utilizar la innovación adaptada para superar los desafíos locales y crear sitios web que no solo se vean modernos, sino que generen reservas, clientes y crecimiento real para su negocio
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
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Encabezado principal */}
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          <p className="text-base font-semibold leading-6 text-secondary uppercase tracking-wide">
            Sobre Nosotros
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Más Que Diseño Web, Somos Tu Socio Digital
          </h1>
          <p className="mt-6 text-md leading-5 text-gray-600 max-w-3xl">
            En Nexus Web Studio, nacemos de una simple pero poderosa idea: que ningún negocio cubano con potencial debería ser invisible en la era digital. Combinamos la pasión por la tecnología con un entendimiento profundo de los desafíos y oportunidades únicos de Cuba.
          </p>
        </div>

        {/* Contenido principal con grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda: Misión y Valores */}
          <div className="space-y-12">
            {/* Misión */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Nuestra Misión
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <strong className="text-gray-900">
                  Potenciar el éxito de los negocios a través de soluciones digitales innovadoras y accesibles, especialmente del sector turístico, proporcionándoles las herramientas digitales más modernas, rápidas y efectivas.
                </strong>
                <br /><br />
                Nos dedicamos a romper las barreras de la conectividad y la visibilidad, diseñando sitios web que no solo se vean profesionales, sino que generen clientes y crecimiento tangible.
              </p>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Nuestros Valores
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Innovación Adaptada</h4>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Aplicamos soluciones de vanguardia, optimizadas para superar los desafíos tecnológicos únicos de nuestro país.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Confianza Transparente</h4>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Creemos en la honestidad y la claridad. Su éxito es el nuestro, y por eso nos asociamos con usted de manera abierta y confiable.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Compromiso con Resultados</h4>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    No nos conformamos con un diseño bonito; nos obsesionamos con que su sitio web cumpla su objetivo final: atraer más clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Grid de imágenes */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  alt="Trabajo de diseño web"
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&crop=center&w=560&h=560&q=80"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg mt-8 lg:mt-16 transition-transform duration-300 hover:scale-105">
                <img
                  alt="Clientes satisfechos"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&crop=left&w=560&h=560&q=80"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  alt="Estrategia digital"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&crop=left&w=560&h=560&q=80"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg mt-8 lg:mt-16 transition-transform duration-300 hover:scale-105">
                <img
                  alt="Resultados comprobados"
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&crop=center&w=560&h=560&q=80"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logros en cifras */}
        <div className="mt-20 lg:mt-24">
          <div className="bg-gradient-to-tr from-gray-950  to-secondary to-95% rounded-2xl p-8 sm:p-12 lg:p-16">
            <p className="text-xl font-bold leading-7 text-zinc-950 text-center uppercase tracking-wide">
              Nuestros Logros en Cifras
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-secondary">$?</div>
                <p className="mt-2 text-sm font-medium text-gray-200">
                  Incremento de ingresos totales generados para nuestros clientes
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-secondary">?</div>
                <p className="mt-2 text-sm font-medium text-gray-200">
                  Negocios que confían en nosotros
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-secondary">?</div>
                <p className="mt-2 text-sm font-medium text-gray-200">
                  Campañas de marketing gestionadas
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-secondary">?</div>
                <p className="mt-2 text-sm font-medium text-gray-200">
                  Clientes generados a través de nuestros servicios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
