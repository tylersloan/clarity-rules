import React, { forwardRef } from 'react'

type ButtonVariant = {
  key: string
  classList: string
}

type ButtonVariants = {
  solid: ButtonVariant
  outline: ButtonVariant
  ghost: ButtonVariant
}

type JustifyVariants = {
  start: string
  center: string
  between: string
}

const BUTTON_VARIANTS: ButtonVariants = {
  solid: {
    key: 'primary',
    classList:
      'form-field-focus bg-primary text-white border-[1px] border-primary hover:bg-primary/70 hover:border-primary/70',
  },
  outline: {
    key: 'outline',
    classList:
      'form-field-focus bg-white text-default border-[1px] border-[#E3E2E5] hover:bg-neutral-50 shadow-[0_1px_4px_0_#F2EFF6CC_inset]',
  },
  ghost: {
    key: 'ghost',
    classList: 'bg-transparent hover:text-link text-[#755DC8]',
  },
}

const BUTTON_JUSTIFY: JustifyVariants = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
}

const BUTTON_SHAPES = {
  organic: 'px-4',
  square: 'aspect-square',
}

type ButtonShapes = {
  square: string
  organic: string
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof ButtonVariants
  justify?: keyof JustifyVariants
  className?: string
  shape?: keyof ButtonShapes
  onClick?: (arg: any) => void
}

export const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      variant = 'solid',
      justify = 'center',
      className,
      shape = 'organic',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          ${shape && BUTTON_SHAPES[shape]}
          ${justify && BUTTON_JUSTIFY[justify]}
          inline-flex items-center form-field
          ${BUTTON_VARIANTS[variant].classList}
          ${className ?? ''}
          disabled:text-neutral-400 disabled:cursor-not-allowed
        `}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
