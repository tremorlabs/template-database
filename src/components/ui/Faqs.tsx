"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

const faqs = [
  {
    question:
      "How secure is the database software in terms of protecting sensitive data?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    question: "Can the database be self-hosted?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    question:
      "Does the software support integration with other systems and applications?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    question:
      "How easy is it to back up and restore data using the database software?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    question:
      "What level of technical support and maintenance is provided for the software?",
    answer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
];

export function Faqs() {
  return (
    <section className="mt-20 sm:mt-36" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="text-2xl lg:text-3xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-50 dark:to-gray-300 py-2 pr-2"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            Can&apos;t find the answer you&apos;re looking for? Don&apos;t
            hesitate to get in touch with our{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-300"
            >
              customer support
            </a>{" "}
            team.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 col-span-full lg:col-span-7 ">
          <Accordion type="multiple" className="mx-auto">
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="first:pb-3 first:pt-0 py-3"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
