import Yo from '../../../assets/yo.png'


const stats = [
  { label: "Automated marketing actions processed daily", value: "44 million" },
  {
    label: "Revenue driven through integrated marketing campaigns",
    value: "$119 trillion"
  },
  { label: "New businesses onboarded annually", value: "46,000" }
];
const values = [
  {
    name: "Be world-class",
    description:
      "We strive for excellence in every solution we deliver, ensuring our platform meets the highest standards in performance, security, and scalability."
  },
  {
    name: "Share everything you know",
    description:
      "We believe in collaboration and transparency. Sharing knowledge with our clients and partners helps everyone grow and achieve more."
  },
  {
    name: "Always learning",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.Technology evolves rapidly, and so do we. Our team constantly explores new trends and technologies to provide cutting-edge solutions."
  },
  {
    name: "Be supportive",
    description:
      "Customer success is our success. We provide continuous support to help businesses overcome challenges and maximize their potential."
  },
  {
    name: "Take responsibility",
    description:
      "We own our work and are accountable for delivering reliable, secure, and scalable integrations that drive results."
  },
  {
    name: "Enjoy downtime",
    description:
      "We celebrate every milestone and encourage a positive work environment where creativity and innovation thrive."
  }
];
const team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      {Yo}
  }
];
const blogPosts = [
  {
    id: 1,
    title: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

export default function AboutBody() {

  return <div className="bg-white">
      <main className="isolate">
        <div className="relative -z-10 isolate">
          <svg aria-hidden="true" className="top-0 -z-10 absolute inset-x-0 w-full h-[64rem] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200">
            <defs>
              <pattern x="50%" y={-1} id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div aria-hidden="true" className="top-0 right-0 left-1/2 -z-10 absolute blur-3xl -ml-24 lg:ml-24 xl:ml-48 transform-gpu overflow-hidden">
            <div style={{ clipPath: "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" }} className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[50.0625rem] aspect-[801/1036]" />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto px-6 lg:px-8 pt-36 sm:pt-60 lg:pt-32 pb-32 max-w-7xl">
              <div className="lg:flex lg:items-center gap-x-14 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                <div className="relative w-full lg:max-w-xl xl:max-w-2xl lg:shrink-0">
                  <h1 className="font-semibold text-5xl text-gray-900 text-pretty sm:text-7xl tracking-tight">
                    We’re changing the way businesses automate marketing
                  </h1>
                  <p className="mt-8 sm:max-w-md lg:max-w-none font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                    At Inteegrations, we empower businesses to simplify and
                    scale their marketing efforts through seamless API
                    integrations. Our platform connects essential tools like
                    Google Analytics, Twilio, Stripe, Integromat, and Zapier,
                    automating workflows and unlocking new growth
                    opportunities.
                  </p>
                  <p className="mt-8 sm:max-w-md lg:max-w-none font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                    Driven by innovation and efficiency, we help companies save time, reduce costs, and focus on what truly matters—building lasting customer relationships and driving success.
                    <br />
                    Join thousands of businesses transforming their marketing strategies with automation.
                  </p>
                </div>
                <div className="flex justify-end sm:justify-start gap-8 mt-14 sm:-mt-44 lg:mt-0 sm:pl-20 lg:pl-0">
                  <div className="flex-none space-y-8 lg:order-last xl:order-none ml-auto sm:ml-0 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 w-44">
                    <div className="relative">
                      <img alt="" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-[2/3] object-cover" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex-none space-y-8 mr-auto sm:mr-0 sm:pt-52 lg:pt-36 w-44">
                    <div className="relative">
                      <img alt="" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-[2/3] object-cover" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
                    </div>
                    <div className="relative">
                      <img alt="" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80" className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-[2/3] object-cover" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex-none space-y-8 pt-32 sm:pt-0 w-44">
                    <div className="relative">
                      <img alt="" src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80" className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-[2/3] object-cover" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
                    </div>
                    <div className="relative">
                      <img alt="" src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80" className="bg-gray-900/5 shadow-lg rounded-xl w-full aspect-[2/3] object-cover" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 sm:mt-0 xl:-mt-8 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
              Our mission
            </h2>
            <div className="flex lg:flex-row flex-col gap-x-8 gap-y-20 mt-6">
              <div className="lg:flex-auto lg:w-full lg:max-w-2xl">
                <p className="text-gray-600 text-xl/8">
                  At Inteegrations, our mission is to revolutionize the way
                  businesses automate and scale their marketing operations. We
                  strive to empower companies of all sizes by providing
                  seamless API integrations with leading platforms like Google
                  Analytics, Twilio, Stripe, Integromat, and Zapier.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  Our goal is to eliminate manual tasks, streamline workflows, and unlock growth opportunities—allowing teams to focus on building meaningful customer relationships and driving business success.
                  <br />
                  By combining innovation, reliability, and security, we are redefining marketing automation for the digital age.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="space-y-8 w-64 xl:w-80">
                  {stats.map(stat =>
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base/7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="font-semibold text-5xl text-gray-900 tracking-tight">
                        {stat.value}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:mx-auto mt-32 sm:mt-40 xl:px-8 xl:max-w-7xl">
          <img alt="" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" className="xl:rounded-3xl w-full aspect-[5/2] object-cover" />
        </div>

        <div className="mx-auto mt-32 sm:mt-40 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto lg:mx-0 max-w-2xl">
            <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
              Our values
            </h2>
            <p className="mt-6 text-gray-600 text-lg/8">
              At Inteegrations, our values drive everything we do. We are
              committed to empowering businesses through innovative marketing
              automation and seamless API integration.
            </p>
          </div>
          <dl className="gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 max-w-2xl lg:max-w-none text-base/7">
            {values.map(value => <div key={value.name}>
                <dt className="font-semibold text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-1 text-gray-600">
                  {value.description}
                </dd>
              </div>)}
          </dl>
        </div>

        <div className="relative -z-10 mt-32 sm:mt-48 isolate">
          <div className="top-1/2 -z-10 absolute inset-x-0 flex justify-center -translate-y-1/2 overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg aria-hidden="true" className="flex-none w-[80rem] h-[40rem] stroke-gray-200">
              <defs>
                <pattern x="50%" y="50%" id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width={200} height={200} patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          <div className="mx-auto px-6 lg:px-8 max-w-7xl">
            <h2 className="font-semibold text-center text-gray-900 text-lg/8">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
              <img alt="Transistor" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
              <img alt="Reform" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
              <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
              <img alt="SavvyCal" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" width={158} height={48} className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain" />
              <img alt="Statamic" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" width={158} height={48} className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 sm:mt-48 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto lg:mx-0 max-w-2xl">
            <h2 className="font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
              Our team
            </h2>
            <p className="mt-6 text-gray-600 text-lg/8">
              We’re a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul role="list" className="gap-x-8 gap-y-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-auto lg:mx-0 mt-20 max-w-2xl lg:max-w-none text-center">
            {team.map(person => <li key={person.name}>
                <img alt="" src={person.imageUrl} className="mx-auto rounded-full size-24" />
                <h3 className="mt-6 font-semibold text-base/7 text-gray-900 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-gray-600 text-sm/6">
                  {person.role}
                </p>
              </li>)}
          </ul>
        </div>

        <div className="mx-auto mt-32 sm:mt-40 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <h2 className="font-semibold text-4xl text-balance text-gray-900 sm:text-5xl tracking-tight">
              From the blog
            </h2>
            <p className="mt-2 text-gray-600 text-lg/8">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 auto-rows-fr mx-auto lg:mx-0 mt-16 sm:mt-20 max-w-2xl lg:max-w-none">
            {blogPosts.map(post =>
              <article
                key={post.id}
                className="relative flex flex-col justify-end bg-gray-900 px-8 pt-80 sm:pt-48 lg:pt-80 pb-8 rounded-2xl overflow-hidden isolate"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="-z-10 absolute inset-0 object-cover size-full"
                />
                <div className="-z-10 absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="-z-10 absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

                <div className="flex flex-wrap items-center gap-y-1 text-gray-300 text-sm/6 overflow-hidden">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="flex items-center gap-x-4 -ml-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="flex-none -ml-0.5 fill-white/50 size-0.5"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="flex-none bg-white/10 rounded-full size-6"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-lg/6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            )}
          </div>
        </div>
      </main>
    </div>;
}
