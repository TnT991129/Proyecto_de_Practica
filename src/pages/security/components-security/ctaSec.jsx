export function CTASecurity() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-7xl">
        <h2 className="max-w-2xl font-semibold text-4xl text-balance text-gray-900 sm:text-5xl tracking-tight">
          Get our most suitable plan for you.
        </h2>
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
  );
}
