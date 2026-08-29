import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "rounded-md border border-transparent bg-clip-padding",
    "font-medium whitespace-nowrap transition-all",
    "outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "active:not-aria-[haspopup]:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",

        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost: "hover:bg-muted hover:text-foreground",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",

        black:
          "bg-white text-black hover:text-white hover:bg-black border-black hover:border-white",

        dark: "bg-black text-froozen hover:text-black hover:bg-froozen border-froozen hover:border-black",

        light:
          "bg-froozen text-black hover:text-froozen hover:bg-black border-froozen ",
      },

      size: {
        default: "gap-2 text-base cursor-pointer",
        xs: "h-7 gap-1 px-2 text-xs",
        sm: "h-8 gap-1.5 px-3 text-sm",
        lg: "h-11 gap-2 px-6 text-base",
        xl: "h-12 gap-2.5 px-8 text-lg",

        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  bg,
  textColor,
  padding,
  textSize,
  href,
  title,
  width,
  ...props
}) {
  const customClasses = cn(bg, textColor, padding, textSize, width);

  // Agar href diya hai to button ki jagah link render hoga
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          buttonVariants({ variant, size }),
          customClasses,
          className,
        )}
      >
        {title}
      </a>
    );
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        customClasses,
        className,
      )}
      {...props}
    >
      {title}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
