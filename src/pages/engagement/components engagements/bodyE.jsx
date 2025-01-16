import Twilio from "../../../assets/Twilio.png";

export function BodyE() {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <p className="font-semibold text-base/7 text-secondary">Deploy faster</p>
          <h1 className="mt-2 font-semibold text-4xl text-pretty text-text sm:text-5xl tracking-tight">
            A better workflow
          </h1>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-xl lg:max-w-none text-base/7 text-text">
            <div>
              <p>
                Twilio is a key tool in digital marketing because it enables businesses to establish direct, personalized, and real-time communication with their customers. Through its APIs, brands can easily integrate communication channels like SMS, phone calls, WhatsApp, and push notifications into their marketing strategies. This ability to interact instantly with users enhances the customer experience and strengthens the relationship between the brand and its audience, which is essential for increasing customer loyalty and retention.
              </p>
              <p className="mt-8">
                Twilio makes it easier to automate marketing campaigns, allowing businesses to send segmented and personalized messages based on user behavior and preferences. This not only optimizes time and resources but also increases campaign effectiveness by delivering relevant content at the right moment. For example, companies can schedule purchase reminders, exclusive promotions, or product updates, thereby improving conversion rates.
              </p>
            </div>
            <div>
              <p>
                Another fundamental aspect of Twilio is its ability to scale marketing campaigns globally. Thanks to its robust infrastructure, businesses can communicate with customers in different countries without worrying about technical limitations or high costs. This opens the door to international marketing strategies, allowing brands to expand their reach and adapt to different markets with localized and culturally relevant messages.
              </p>
              <p className="mt-8">
                Finally, Twilio helps improve security in digital interactions through user authentication and identity verification (2FA). This not only protects customers but also builds trust in the brand, a key factor in digital marketing. By combining security with effective communication, Twilio becomes an all-in-one tool for building strong, lasting customer relationships while optimizing marketing strategy performance.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <a
              href="/signin"
              className="bg-secondary hover:bg-secondary shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="relative pt-16 lg:pt-20 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <img
            alt=""
            src={Twilio}
            className="shadow-2xl mb-[-2%] rounded-xl ring-1 ring-primary"
          />
          <div aria-hidden="true" className="relative">
            <div className="bottom-0 absolute -inset-x-20 bg-gradient-to-t from-primary pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
