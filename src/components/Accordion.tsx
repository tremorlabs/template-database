import * as AccordionPrimitives from "@radix-ui/react-accordion"
import { RiArrowRightSLine } from "@remixicon/react"
import React from "react"

import { cx } from "@/lib/utils"

const Accordion = AccordionPrimitives.Root

Accordion.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={cx(
        // base
        "group flex flex-1 cursor-pointer items-start gap-2 py-3 text-left font-medium leading-none",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600",
        //focus
        "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <RiArrowRightSLine
        className={cx(
          // base
          "mt-[1px] size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-90",
          // text color
          "text-indigo-600 dark:text-indigo-400",
          // disabled
          "group-data-[disabled]:text-indigo-300 group-data-[disabled]:dark:text-indigo-700",
        )}
        aria-hidden="true"
        focusable="false"
      />
      <span className="leading-6">{children}</span>
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
))

AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={cx(
      "pl-[28px] data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen",
    )}
    {...props}
  >
    <p
      className={cx(
        // base
        "overflow-hidden pb-4 leading-7",
        // text color
        "text-gray-700 dark:text-gray-200",
        className,
      )}
    >
      {children}
    </p>
  </AccordionPrimitives.Content>
))

AccordionContent.displayName = "AccordionContent"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "overflow-hidden border-b first:mt-0",
      // border color
      "border-gray-200 dark:border-gray-800",
      className,
    )}
    {...props}
  />
))

AccordionItem.displayName = "AccordionItem"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
