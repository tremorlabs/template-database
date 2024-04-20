import React from "react";
import Code from "@/components/Code";
import { RiArrowDownLine, RiShapesLine } from "@remixicon/react";
import Arrow from "../Arrow";
import CodeExampleTabs from "./CodeExampleTabs";

// const code = `return (// [!code ++]
// <div className="rounded-lg bg-gradient-to-r from-sky-300 to-sky-500 p-4 !pr-0 md:p-8 lg:p-12 [&>pre]:rounded-none max-w-xl">// [!code --]
//   <div className="overflow-hidden rounded-s-lg">// [!code highlight]
//     <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
//       <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 ">
//         {filename}
//       </span>
//     </div>
//     <div
//       className="border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
//       dangerouslySetInnerHTML={{ __html: html }}
//     ></div>
//   </div>
// </div>
// );
// `;

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
      <h2 className="text-4xl sm:text-6xl md:text-6xl tracking-tighter font-bold text-transparent bg-clip-text inline-block bg-gradient-to-br from-gray-900 to-gray-700 py-2">
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
    </section>
  );
}
