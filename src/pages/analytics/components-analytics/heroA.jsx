import Imagen1 from "../../../assets/analytics/pexels-fauxels-3183170.jpg";
import Imagen2 from "../../../assets/analytics/pexels-fotios-photos-1092644.jpg";
import Imagen3 from "../../../assets/analytics/pexels-fotios-photos-16368540.jpg";
import Imagen4 from "../../../assets/analytics/pexels-goumbik-669610.jpg";
import Imagen5 from "../../../assets/analytics/pexels-marketingtuig-185576.jpg";
export function HeroA() {
  return (

    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:max-w-7xl" id>
        <h2 className="font-semibold text-base/7 text-secondary">Analytic API</h2>
        <p className="mt-2 max-w-70 font-semibold text-pretty text-text sm:text-5xl tracking-tight">
          Google Analytics API: Measure, Analyze, and Optimize Your Digital Strategies
        </p>
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 mt-10 sm:mt-16">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] h-full overflow-hidden">
              <img
                alt=""
                src={Imagen5}
                className="object-left h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-secondary text-sm/4">Analytics</h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">Evaluating Marketing Strategies</p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                 It tracks the performance of your digital marketing campaigns, such as ads, emails, and social media. You can identify which strategies are working and optimize them for better results.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px bg-white rounded-lg lg:rounded-tr-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] h-full overflow-hidden">
              <img
                alt=""
                src={Imagen2}
                className="lg:object-right object-left h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-secondary text-sm/4">Users</h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">Tracking User Behavior</p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Google Analytics allows you to track how users interact with your website: which pages they visit, how long they stay, and what actions they take. This helps you better understand the needs and preferences of your visitors.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow rounded-lg lg:rounded-tr-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg lg:rounded-bl-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] h-full overflow-hidden">
              <img
                alt=""
                src={Imagen3}
                className="object-left h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-secondary text-sm/4">Audience</h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight"> Audience Segmentation</p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  Google Analytics offers detailed insights into your audiences demographics, interests, and geographic location. With this information, you can tailor your content and campaigns to better meet your users expectations.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow rounded-lg lg:rounded-bl-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg" />
            <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] h-full overflow-hidden">
              <img
                alt=""
                src={Imagen4}
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-secondary text-sm/4">Data</h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">Data-Driven Decision Making</p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  By analyzing Google Analytics reports, you can make informed decisions to improve user experience, maximize conversions, and prioritize development efforts based on real data.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow rounded-lg ring-1 ring-black/5 pointer-events-none" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] h-full overflow-hidden">
              <img
                alt=""
                src={Imagen1}
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="font-semibold text-secondary text-sm/4">Web</h3>
                <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight"> Measuring Website Performance</p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                  It provides key metrics like load speed, bounce rates, top-visited pages, and conversions. This enables you to identify areas for improvement to optimize user experience and enhance site efficiency.
                </p>
              </div>
            </div>
            <div className="absolute inset-px shadow rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] ring-1 ring-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
