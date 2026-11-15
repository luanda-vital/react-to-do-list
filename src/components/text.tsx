
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
// VCA - Class Variance Authority
// para gerenciar variações de estilo

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm": "text-sm leading-5 font-normal",
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold"
    }
  },
  defaultVariants: {
    variant: "body-md"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  // mapeia todas as tags/elementos HTML
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({variant, className}),
      ...props
    },
    children
  );
}