import React from "react";
import Code from "@/components/Code";
import CodeExampleTabs from "./CodeExampleTabs";

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
      <div className="w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-00/20 bg-indigo-50/50 tracking-tighter leading-4 z-10">
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
    </section>
  );
}
