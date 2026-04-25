"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "vico:group/tabs vico:flex vico:gap-2 vico:data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "vico:group/tabs-list vico:inline-flex vico:w-fit vico:items-center vico:justify-center vico:rounded-lg vico:p-[3px] vico:text-muted-foreground vico:group-data-horizontal/tabs:h-8 vico:group-data-vertical/tabs:h-fit vico:group-data-vertical/tabs:flex-col vico:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "vico:bg-muted",
        line: "vico:gap-1 vico:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "vico:relative vico:inline-flex vico:h-[calc(100%-1px)] vico:flex-1 vico:items-center vico:justify-center vico:gap-1.5 vico:rounded-md vico:border vico:border-transparent vico:px-1.5 vico:py-0.5 vico:text-sm vico:font-medium vico:whitespace-nowrap vico:text-foreground/60 vico:transition-all vico:group-data-vertical/tabs:w-full vico:group-data-vertical/tabs:justify-start vico:hover:text-foreground vico:focus-visible:border-ring vico:focus-visible:ring-[3px] vico:focus-visible:ring-ring/50 vico:focus-visible:outline-1 vico:focus-visible:outline-ring vico:disabled:pointer-events-none vico:disabled:opacity-50 vico:has-data-[icon=inline-end]:pr-1 vico:has-data-[icon=inline-start]:pl-1 vico:aria-disabled:pointer-events-none vico:aria-disabled:opacity-50 vico:dark:text-muted-foreground vico:dark:hover:text-foreground vico:group-data-[variant=default]/tabs-list:data-active:shadow-sm vico:group-data-[variant=line]/tabs-list:data-active:shadow-none vico:[&_svg]:pointer-events-none vico:[&_svg]:shrink-0 vico:[&_svg:not([class*=size-])]:size-4",
        "vico:group-data-[variant=line]/tabs-list:bg-transparent vico:group-data-[variant=line]/tabs-list:data-active:bg-transparent vico:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent vico:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "vico:data-active:bg-background vico:data-active:text-foreground vico:dark:data-active:border-input vico:dark:data-active:bg-input/30 vico:dark:data-active:text-foreground",
        "vico:after:absolute vico:after:bg-foreground vico:after:opacity-0 vico:after:transition-opacity vico:group-data-horizontal/tabs:after:inset-x-0 vico:group-data-horizontal/tabs:after:bottom-[-5px] vico:group-data-horizontal/tabs:after:h-0.5 vico:group-data-vertical/tabs:after:inset-y-0 vico:group-data-vertical/tabs:after:-right-1 vico:group-data-vertical/tabs:after:w-0.5 vico:group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("vico:flex-1 vico:text-sm vico:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
