import GA from "../../../assets/Google Analyics.jpg";

export function Hero1(){
  return(
    <div className="relative bg-gradient-to-b from-secondary pt-14 overflow-hidden isolate">
      <div
        aria-hidden="true"
        className="right-1/2 -z-10 absolute inset-y-0 bg-white shadow-indigo-600/10 shadow-xl -mr-96 sm:-mr-80 lg:-mr-96 ring-1 ring-indigo-50 skew-x-[-30deg] w-[200%] origin-top-right"
      />
      <div className="mx-auto px-6 lg:px-8 py-32 sm:py-40 max-w-7xl">
        <div className="lg:gap-x-16 lg:gap-y-8 xl:gap-x-8 lg:grid lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h1 className="lg:col-span-2 max-w-2xl font-semibold text-5xl text-balance text-gray-900 sm:text-7xl tracking-tight xl:col-auto">
            Discover the advantages of Google Analytics.
          </h1>
          <div className="xl:col-end-1 xl:row-start-1 mt-6 lg:mt-0 max-w-xl">
            <p className="font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
              Gain valuable insights to optimize your websites performance, understand your audience, and drive business growth with the powerful tools and data analytics of Google Analytics.
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
          <img
            alt=""
            src={GA}
            className="xl:row-span-2 xl:row-end-2 mt-10 sm:mt-16 lg:mt-0 xl:mt-20 rounded-2xl w-full max-w-xl lg:max-w-none aspect-[6/5] object-cover"
          />
        </div>
      </div>
      <div className="bottom-0 -z-10 absolute inset-x-0 bg-gradient-to-t from-white h-24 sm:h-32" />
      </div>
  )
}
