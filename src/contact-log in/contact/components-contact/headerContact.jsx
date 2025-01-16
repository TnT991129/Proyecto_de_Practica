import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function HeaderContact() {
  return <div className="gap-x-8 gap-y-8 grid grid-cols-1 md:grid-cols-1 mx-auto my-40 max-w-5xl pst-10">
      <div className="px-4 sm:px-0 text-center">
        <h2 className="font-extrabold text-2xl text-primary">
          Personal Information
        </h2>
        <p className="mt-1 text-gray-600 text-xl">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <form className="md:col-span-2 bg-white shadow-md shadow-secondary sm:rounded-xl ring-1 ring-secondary">
        <div className="px-auto py-6 sm:p-8">
          <div className="gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-6 max-w-2xl">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block font-medium text-gray-900 text-sm/6">
                First name
              </label>
              <div className="mt-2">
                <input id="first-name" name="first-name" type="text" autoComplete="given-name" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block font-medium text-gray-900 text-sm/6">
                Last name
              </label>
              <div className="mt-2">
                <input id="last-name" name="last-name" type="text" autoComplete="family-name" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block font-medium text-gray-900 text-sm/6">
                Email address
              </label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block font-medium text-gray-900 text-sm/6">
                Country
              </label>
              <div className="grid grid-cols-1 mt-2">
                <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 bg-white py-1.5 pr-8 pl-3 rounded-md w-full text-base text-gray-900 sm:text-sm/6 -outline-offset-1 appearance-none focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <ChevronDownIcon aria-hidden="true" className="justify-self-end col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none self-center size-5 sm:size-4" />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block font-medium text-gray-900 text-sm/6">
                Street address
              </label>
              <div className="mt-2">
                <input id="street-address" name="street-address" type="text" autoComplete="street-address" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block font-medium text-gray-900 text-sm/6">
                City
              </label>
              <div className="mt-2">
                <input id="city" name="city" type="text" autoComplete="address-level2" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block font-medium text-gray-900 text-sm/6">
                State / Province
              </label>
              <div className="mt-2">
                <input id="region" name="region" type="text" autoComplete="address-level1" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block font-medium text-gray-900 text-sm/6">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input id="postal-code" name="postal-code" type="text" autoComplete="postal-code" className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" />
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto my-2.5 max-w-2xl text-center'>
          <label htmlFor="about" className="block font-medium text-gray-900 text-sm/6">
            Can you share more about your business needs and challenges?
          </label>
          <div className="mt-2">
            <textarea id="about" name="about" rows={3} className="block bg-white py-3 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary outline outline-1 outline-gray-300" defaultValue={""} />
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-6 border-gray-900/10 px-4 sm:px-8 py-4 border-t">
          <button type="button" className="font-semibold text-gray-900 text-sm/6">
            Cancel
          </button>
          <button type="submit" className="bg-secondary hover:bg-secondary shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div>
      </form>
    </div>;
}