import logo from "../../../assets/icons/logo.png";
export function HeroSec() {
  return (
    <div className="relative bg-white">
      <div className="lg:gap-x-8 lg:grid lg:grid-cols-12 mx-auto lg:px-8 max-w-7xl">
        <div className="lg:col-span-7 xl:col-span-6 px-6 lg:px-0 pt-10 lg:pt-40 pb-24 sm:pb-32 lg:pb-48">
          <div className="mx-auto lg:mx-0 max-w-lg">
            <img alt="Your Company" src={logo} className="h-11" />

            <h1 className="mt-24 sm:mt-10 font-semibold text-5xl text-gray-900 text-pretty sm:text-7xl tracking-tight">
              Boost Your Digital Business with Stripe
            </h1>
            <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
              Discover how Stripe revolutionizes online payments by providing
              secure and optimized transactions that enhance customer experience
              and strengthen your digital marketing strategies. Increase
              conversions, expand your global reach, and grow your business with
              innovative payment solutions.
            </p>
            <div className="flex items-center gap-x-6 mt-10">
              <a
                href="/signin"
                className="bg-secondary hover:bg-secondary shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="relative xl:left-1/2 xl:absolute xl:inset-0 lg:col-span-5 lg:-mr-8 xl:mr-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            className="lg:absolute lg:inset-0 bg-gray-50 shadow-secondary shadow-sm rounded-l w-full lg:h-full aspect-[3/2] lg:aspect-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
