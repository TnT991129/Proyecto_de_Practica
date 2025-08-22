import {
  SparklesIcon,        // Para primera impresión digital
  MagnifyingGlassIcon,  // Para competir con Google
  ChatBubbleLeftRightIcon, // Para atención 24/7
  Cog6ToothIcon,       // Para digitalizar operación
  QrCodeIcon,          // Para tarjeta de presentación digital
  CurrencyDollarIcon   // Para inversión con retorno
} from '@heroicons/react/24/outline';

const features = [
  {
    name: "La Primera Impresión es Digital: Ya No Hay Segundas Oportunidades.",
    description:
      "Hoy, un turista conoce su negocio a través de su pantalla antes de pisarlo. Nosotros creamos vitrinas digitales de alta gama que enamoran a primera vista y generan confianza inmediata.",
    icon: SparklesIcon, // Representa excelencia y calidad premium
    color: "bg-purple-500"
  },
  {
    name: "No Estás Compitiendo Solo con el Negocio de al Lado, Estás Compitiendo con Google.",
    description:
      "Si un turista busca 'paladar en La Habana' y usted no aparece en los primeros resultados, es como si no existiera. No se trata solo de tener web, se trata de ser visible y encontrable.",
    icon: MagnifyingGlassIcon, // Representa búsqueda y visibilidad
    color: "bg-blue-500"
  },
  {
    name: "Atiende Consultas 24/7, Sin Necesidad de Estar Pendiente del Teléfono.",
    description:
      "Un sitio web con la información clara (menú, precios, dirección, horarios) y un botón de WhatsApp contesta las preguntas más comunes a cualquier hora del día o de la noche, desde cualquier parte del mundo. Automatiza tu servicio al cliente y captura leads incluso mientras duermes.",
    icon: ChatBubbleLeftRightIcon, // Representa comunicación y atención
    color: "bg-green-500"
  },
  {
    name: "Digitaliza Tu Operación y Libera Tiempo Para Lo Que Importa: Atender a Tus Clientes.",
    description:
      "Gestionar reservas, responder las mismas preguntas una y otra vez y actualizar precios en redes sociales consume horas valiosas. Un sitio web profesional automatiza y organiza estas tareas.",
    icon: Cog6ToothIcon, // Representa automatización y eficiencia
    color: "bg-orange-500"
  },
  {
    name: "Su Tarjeta de Presentación ya No es de Cartón, es un Link.",
    description:
      "Un sitio web profesional es su mejor herramienta de marketing. Es lo que puede enviar por WhatsApp, poner en su perfil de Instagram o en las tarjetas físicas.",
    icon: QrCodeIcon, // Representa digitalización y links
    color: "bg-red-500"
  },
  {
    name: "Es una Inversión, No un Gasto. El Retorno es Tangible.",
    description:
      "Un sitio web no es un lujo, es una herramienta de negocio. El costo de desarrollo se recupera rápidamente con unas pocas reservas o ventas directas generadas a través de él.",
    icon: CurrencyDollarIcon, // Representa inversión y retorno financiero
    color: "bg-emerald-500"
  }
];

export function Comp() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary">
            Importancia de Nuestros Servicios
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Si no tienes un sitio web, ¿cómo te encuentran?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            La decisión de visitarte se toma en Google. Si no estás ahí, ya perdiste.
          </p>
        </div>

        {/* Grid de características */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col p-8 bg-gray-50 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100">
                  <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-primary">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                      <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
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
export function LogoClouds() {
  // Carrusel infinito con scroll automático
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame;
    let scrollAmount = 1;

    function scrollCarousel() {
      if (carousel) {
        carousel.scrollLeft += scrollAmount;
        // Reinicia el scroll para efecto infinito
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollCarousel);
    }
    animationFrame = requestAnimationFrame(scrollCarousel);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Negocios con los que trabajas
  const businessTypes = [
    {
      name: "Hostales",
      icon: "🏨"
    },
    {
      name: "Bares",
      icon: "🍸"
    },
    {
      name: "Restaurantes",
      icon: "🍽️"
    },
    {
      name: "Taxistas",
      icon: "🚕"
    },
    {
      name: "Mipymes",
      icon: "🏪"
    },
    {
      name: "Galerías de Arte",
      icon: "🖼️"
    },
    {
      name: "Cafeterías",
      icon: "☕"
    },
    {
      name: "Artesanos",
      icon: "🧵"
    }
  ];

  // Duplica los elementos para efecto infinito
  const items = [...businessTypes, ...businessTypes];

  return (
    <div className="bg-secondary py-24 sm:py-25">
      <h2 className=" text-center text-5xl font-semibold text-primary mb-20">
        Trabajamos con todo tipo de negocios
      </h2>
      <div
        ref={carouselRef}
        className="overflow-x-hidden whitespace-nowrap"
        style={{ width: "100%", maxWidth:1600, margin: "0 auto" }}
      >
        <div className="inline-flex" style={{ minWidth: "max-content" }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-8 min-w-[180px]"
            >
              <span className="text-6xl mb-4">{item.icon}</span>
              <span className="font-semibold text-xl text-primary">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
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
  return <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl text-center">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-semibold text-4xl text-balance text-secondary sm:text-5xl tracking-tight">
            Conozca a nuestro equipo
          </h2>
          <p className="mt-6 text-lg/8 text-text">
            <strong>Las mentes detrás del exito del negocio</strong>
          </p>
          <p className="mt-2 text-lg/8 text-text">
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
  return <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-semibold text-base/7 text-secondary">Sobre Nosotros</p>
          <h1 className="mt-2 font-semibold text-4xl text-pretty text-primary sm:text-5xl tracking-tight">
            Más Que Diseño Web, Somos Tu Socio Digital
          </h1>
          <p className="mt-6 text-balance text-primary text-xl/8">
            En Nexus Web Studio, nacemos de una simple pero poderosa idea: que ningún negocio cubano con potencial debería ser invisible en la era digital. Combinamos la pasión por la tecnología con un entendimiento profundo de los desafíos y oportunidades únicos de Cuba. Sabemos que una conexión a internet lenta no puede ser una barrera para su crecimiento. Por eso, nos especializamos en crear sitios web increíblemente rápidos, modernos y optimizados que funcionan perfectamente en nuestro contexto, para que sus clientes —especialmente los turistas internacionales— tengan una experiencia impecable desde el primer momento. No solo construimos páginas web; construimos puentes digitales que conectan su talento, su producto o su servicio con el mundo.
          </p>
        </div>
        <section className="lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div className="lg:pr-8">
            <h2 className="font-semibold text-2xl text-gray-900 text-pretty tracking-tight">
              Nuestra Misión
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              <strong>
                Potenciar el éxito de los negocios a través de soluciones digitales innovadoras y accesibles , especialmente del sector turístico, proporcionándoles las herramientas digitales más modernas, rápidas y efectivas.
              </strong>
              <br />
              Nos dedicamos a romper las barreras de la conectividad y la visibilidad, diseñando sitios web que no solo se vean profesionales, sino que generen clientes y crecimiento tangible.
            </p>
            <br />
            <h3>Nuestros Valores</h3>
            <p className="mt-8 text-base/7 text-gray-600">
              <strong>Innovación Adaptada:</strong> Aplicamos soluciones de vanguardia, optimizadas para superar los desafíos tecnológicos únicos de nuestro país.
              <br />
              <strong>
                Confianza Transparente:
              </strong> Creemos en la honestidad y la claridad. Su éxito es el nuestro, y por eso nos asociamos con usted de manera abierta y confiable.
              <br />
              <strong>
                Compromiso con Resultados: 
              </strong> No nos conformamos con un diseño bonito; nos obsesionamos con que su sitio web cumpla su objetivo final: atraer más clientes.
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
              Nuestros Logros en Cifras
            </p>
            <hr className="border-gray-200 mt-6 border-t" />
            <dl className="gap-x-8 gap-y-4 grid grid-cols-1 sm:grid-cols-2 mt-6">
              <div className="flex flex-col gap-y-2 border-gray-200 pb-4 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Incremento de ingresos totales generados para nuestras clientes.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  $<span>250</span>M+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-gray-200 pb-4 border-b border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Negocios que confían en nosotras.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>50</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-gray-200 max-sm:pb-4 max-sm:border-b max-sm:border-dotted">
                <dt className="text-gray-600 text-sm/6">
                  Campañas de marketing gestionadas.
                </dt>
                <dd className="order-first font-semibold text-6xl tracking-tight">
                  <span>3</span>M+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-gray-600 text-sm/6">
                  Clientes generados a través de nuestros servicios
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
