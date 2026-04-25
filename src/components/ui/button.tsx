import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "vico:group/button vico:inline-flex vico:shrink-0 vico:items-center vico:justify-center vico:rounded-lg vico:border vico:border-transparent vico:bg-clip-padding vico:text-sm vico:font-medium vico:whitespace-nowrap vico:transition-all vico:outline-none vico:select-none vico:focus-visible:border-ring vico:focus-visible:ring-3 vico:focus-visible:ring-ring/50 vico:active:not-aria-[haspopup]:translate-y-px vico:disabled:pointer-events-none vico:disabled:opacity-50 vico:aria-invalid:border-destructive vico:aria-invalid:ring-3 vico:aria-invalid:ring-destructive/20 vico:dark:aria-invalid:border-destructive/50 vico:dark:aria-invalid:ring-destructive/40 vico:[&_svg]:pointer-events-none vico:[&_svg]:shrink-0 vico:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "vico:bg-primary vico:text-primary-foreground vico:[a]:hover:bg-primary/80",
        outline:
          "vico:border-border vico:bg-background vico:hover:bg-muted vico:hover:text-foreground vico:aria-expanded:bg-muted vico:aria-expanded:text-foreground vico:dark:border-input vico:dark:bg-input/30 vico:dark:hover:bg-input/50",
        secondary:
          "vico:bg-secondary vico:text-secondary-foreground vico:hover:bg-secondary/80 vico:aria-expanded:bg-secondary vico:aria-expanded:text-secondary-foreground",
        ghost:
          "vico:hover:bg-muted vico:hover:text-foreground vico:aria-expanded:bg-muted vico:aria-expanded:text-foreground vico:dark:hover:bg-muted/50",
        destructive:
          "vico:bg-destructive/10 vico:text-destructive vico:hover:bg-destructive/20 vico:focus-visible:border-destructive/40 vico:focus-visible:ring-destructive/20 vico:dark:bg-destructive/20 vico:dark:hover:bg-destructive/30 vico:dark:focus-visible:ring-destructive/40",
        link: "vico:text-primary vico:underline-offset-4 vico:hover:underline",
      },
      size: {
        default:
          "vico:h-8 vico:gap-1.5 vico:px-2.5 vico:has-data-[icon=inline-end]:pr-2 vico:has-data-[icon=inline-start]:pl-2",
        xs: "vico:h-6 vico:gap-1 vico:rounded-[min(var(--radius-md),10px)] vico:px-2 vico:text-xs vico:in-data-[slot=button-group]:rounded-lg vico:has-data-[icon=inline-end]:pr-1.5 vico:has-data-[icon=inline-start]:pl-1.5 vico:[&_svg:not([class*=size-])]:size-3",
        sm: "vico:h-7 vico:gap-1 vico:rounded-[min(var(--radius-md),12px)] vico:px-2.5 vico:text-[0.8rem] vico:in-data-[slot=button-group]:rounded-lg vico:has-data-[icon=inline-end]:pr-1.5 vico:has-data-[icon=inline-start]:pl-1.5 vico:[&_svg:not([class*=size-])]:size-3.5",
        lg: "vico:h-9 vico:gap-1.5 vico:px-2.5 vico:has-data-[icon=inline-end]:pr-2 vico:has-data-[icon=inline-start]:pl-2",
        icon: "vico:size-8",
        "icon-xs":
          "vico:size-6 vico:rounded-[min(var(--radius-md),10px)] vico:in-data-[slot=button-group]:rounded-lg vico:[&_svg:not([class*=size-])]:size-3",
        "icon-sm":
          "vico:size-7 vico:rounded-[min(var(--radius-md),12px)] vico:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "vico:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
