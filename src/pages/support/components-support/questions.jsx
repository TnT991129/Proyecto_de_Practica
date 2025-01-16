import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What APIs can I integrate with Inteegrations?",
    answer:
      "You can seamlessly connect with Google Analytics, Twilio, Stripe, Integromat, and Zapier. We’re continually adding support for more marketing tools."
  },
  {
    question: "Is my data secure on the platform?",
    answer:
      "Absolutely. We use SSL encryption, OAuth 2.0 authentication, and follow GDPR-compliant practices to protect your data."
  },
  {
    question: "Do I need coding skills to use Inteegrations?",
    answer:
      "Not at all! Our platform is designed for both technical and non-technical users. With our no-code workflow builder, you can automate processes in minutes."
  },
  {
    question: "What happens if I exceed my API usage limit?",
    answer:
      "If you reach your plan's limit, we'll notify you. You can easily upgrade your plan or purchase additional API requests to keep your workflows running smoothly."
  },
  {
    question: "How can I contact support?",
    answer:
      "We offer 24/7 online support through live chat and email. Premium users also have access to priority phone support and dedicated account managers."
  }
];

export default function Questions() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40 max-w-7xl">
        <div className="mx-auto divide-y divide-white/10 max-w-4xl">
          <h2 className="font-semibold text-4xl text-white sm:text-5xl tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="space-y-6 mt-10 divide-y divide-white/10">
            {faqs.map(faq =>
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="flex justify-between items-start w-full text-left text-white group">
                    <span className="font-semibold text-base/7">
                      {faq.question}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="group-data-[open]:hidden size-6"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="group-[&:not([data-open])]:hidden size-6"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
