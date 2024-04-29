// Tremor Raw RadioGroup [v0.0.0]

import * as RadioGroupPrimitives from "@radix-ui/react-radio-group"
import React from "react"

import { cx, focusRing } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={cx("grid gap-2", className)}
      {...props}
    />
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item> & {
    icon: React.ElementType
  }
>(({ className, icon, ...props }, forwardedRef) => {
  const Icon = icon
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={cx(
        "group relative flex size-8 appearance-none items-center justify-center outline-none",
        className,
      )}
      {...props}
    >
      <div
        className={cx(
          // base
          "flex size-full shrink-0 items-center justify-center rounded-lg text-gray-700",
          // background color
          "bg-transparent",
          // checked
          "group-data-[state=checked]:bg-indigo-50 group-data-[state=checked]:text-indigo-600",
          // focus
          focusRing,
        )}
      >
        <Icon className="size-4 text-inherit" />
      </div>
    </RadioGroupPrimitives.Item>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
