import home from '../../../assets/Home.jpg'
export default function HeroI() {

  return <div className="relative pt-28 overflow-hidden isolate">
      <img alt="" src={home} className="-z-10 absolute inset-0 opacity-80 blur-sm object-cover size-full" />
      <div aria-hidden="true" className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden">
        <div style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} className="relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] bg-gradient-to-tr from-primary to-secondary opacity-20 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678] rotate-[30deg]" />
      </div>
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto py-32 sm:py-48 lg:py-56 max-w-3xl">
          <div className="sm:flex sm:justify-center hidden sm:mb-8" />
          <div className="text-center">
            <h1 className="font-semibold text-5xl text-balance text-white sm:text-6xl tracking-tight">
              Boost Your Digital Marketing with Inteegrations
            </h1>
            <p className="mt-8 font-bold text-lg text-pretty text-secondary sm:text-xl/8">
              Automate, Connect, and Optimize Your Marketing Strategies with
              Our Powerful API Integration—Streamline Workflows, Maximize
              Efficiency, and Drive Business Growth.
            </p>
            <div className="flex justify-center items-center gap-x-6 mt-10">
              <a href="/signin" className="bg-secondary hover:bg-primary shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden">
        <div style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} className="relative left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] bg-gradient-to-tr from-primary to-secondary opacity-20 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678]" />
      </div>
    </div>;
}
