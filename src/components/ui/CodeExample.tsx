import React from "react";
import Code from "@/components/Code";
import CodeExampleTabs from "./CodeExampleTabs";
import {
  RiLinksLine,
  RiPlug2Line,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiShieldLine,
  RiStackLine,
} from "@remixicon/react";

const code = `CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    gender CHAR(1),
    rewards_member BOOLEAN
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    sales_date DATE,
    customer_id INT REFERENCES Customers(customer_id)
);

CREATE TABLE Items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE Order_Items (
    order_id INT REFERENCES Orders(order_id),
    item_id INT REFERENCES Items(item_id),
    PRIMARY KEY (order_id, item_id)
);`;

const code2 = `async function fetchCustomerOrders() {
    const result = await prisma.orders.findMany({
        where: {
            customer: {
                name: 'Jack Beanstalk'
            }
        },
        include: {
            customer: true,
            order_items: {
                include: {
                    item: true
                }
            }
        }
    });
    return result;
}
`;

export default function CodeExample() {
  return (
    <section className="mt-28 px-2 max-w-6xl mx-auto w-full">
      <div className="w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-200/20 bg-indigo-50/50 tracking-tighter leading-4 z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to-indigo-600">
          Developer-first
        </span>
      </div>
      <h2 className="mt-2 text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2">
        Built by developers, <br /> for developers
      </h2>
      <p className="mt-6 text-lg max-w-2xl text-gray-700">
        Rich and expressive query language that allows you to filter and sort by
        any field, no matter how nested it may be.
      </p>

      <CodeExampleTabs
        tab1={
          <Code code={code} lang="sql" copy={false} className="h-[24rem]" />
        }
        tab2={
          <Code
            code={code2}
            lang="javascript"
            copy={false}
            className="h-[24rem]"
          />
        }
      />
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-2 w-fit ring-1 ring-black/5 shadow-md shadow-indigo-400/30">
            <RiStackLine aria-hidden="true" className="size-6 text-indigo-600" />
          </div>
          <div className="mr-3 space-y-1">
            <span className="font-medium text-gray-900 ">
              Use Database with your stack
            </span>
            <p className="text-gray-500">
              We offer client and server libraries in everything from React and
              Ruby to iOS.
            </p>
          </div>
        </div>
        <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-2 w-fit ring-1 ring-black/5 shadow-md shadow-indigo-400/30">
            <RiPlugLine aria-hidden="true" className="size-6 text-indigo-600" />
          </div>
          <div className="mr-3 space-y-1">
            <span className="font-medium text-gray-900 ">
              Try plug & play options
            </span>
            <p className="text-gray-500">
              Customize and deploy data infrastructure directly from the
              Database Dashboard.
            </p>
          </div>
        </div>
        <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-2 w-fit ring-1 ring-black/5 shadow-md shadow-indigo-400/30">
            <RiLinksLine aria-hidden="true" className="size-6 text-indigo-600" />
          </div>
          <div className="mr-3 space-y-1">
            <span className="font-medium text-gray-900 ">
              Explore pre-built integrations
            </span>
            <p className="text-gray-500">
              Connect Database to over a hundred tools including Stripe,
              Salesforce, or Quickbooks.
            </p>
          </div>
        </div>
        <div className="col-span-4 space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="rounded-lg p-2 w-fit ring-1 ring-black/5 shadow-md shadow-indigo-400/30">
            <RiShieldKeyholeLine aria-hidden="true" className="size-6 text-indigo-600" />
          </div>
          <div className="mr-3 space-y-1">
            <span className="font-medium text-gray-900 ">
              Security & privacy
            </span>
            <p className="text-gray-500">
              Database supports PII data encrypted with AES-256 at rest or
              explicit user consent flows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
