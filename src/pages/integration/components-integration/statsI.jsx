

const stats = [
  {
    id: 1,
    name: "Businesses integrated with our API globally.",
    value: "🚀 10,000+"
  },
  { id: 2, name: "Flat API usage fee with no hidden costs.", value: "💼 2%" },
  {
    id: 3,
    name: "Uptime guarantee for uninterrupted performance.",
    value: "🔒 99.99%"
  },
  {
    id: 4,
    name: "In revenue growth driven by automated marketing solutions.",
    value: "💰 $120M+"
  }
];

export default function Stats() {
  return <div className="relative bg-white">
      <img alt="" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80" className="lg:left-0 lg:absolute lg:inset-y-0 bg-gray-50 ml-8 rounded-xl w-full lg:w-1/2 h-56 lg:h-full object-cover" />
      <div className="grid lg:grid-cols-2 mx-auto max-w-7xl">
        <div className="lg:col-start-2 px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-24 sm:pb-32">
          <div className="mx-auto lg:mr-0 max-w-2xl lg:max-w-lg">
            <h2 className="font-semibold text-base/8 text-secondary">
              Our track record
            </h2>
            <p className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
              Trusted by leading marketing teams worldwide
            </p>
            <p className="mt-6 text-gray-600 text-lg/8">
              Join thousands of businesses that have streamlined their
              marketing operations with Inteegrations. Our robust API empowers
              brands to automate workflows, connect tools seamlessly, and
              scale their marketing efforts efficiently.
            </p>
            <dl className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-20 xl:mt-16 max-w-xl">
              {stats.map(stat =>
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-gray-900/10 pl-6 border-l"
                >
                  <dt className="text-gray-600 text-sm/6">
                    {stat.name}
                  </dt>
                  <dd className="order-first font-semibold text-3xl text-gray-900 tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>;
}
