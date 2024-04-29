import React from "react"



interface BadgeProps
    extends React.ComponentPropsWithoutRef<"span"> { }

// @SEV: Props needed here?
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ children, className, ...props }: BadgeProps, forwardedRef) => {
        return (
            <span ref={forwardedRef} className="block w-fit uppercase px-3 border rounded-lg sm:text-sm font-semibold py-1.5 border-indigo-200/20 bg-indigo-50/50 dark:border-indigo-800/30 dark:bg-indigo-900/20 tracking-tighter leading-4 z-10" {...props}>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-indigo-600 dark:from-indigo-200 dark:to-indigo-400">
                    {children}
                </span>
            </span>
        )
    },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }