import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

const ButtonVariants = cva('flex items-center justify-center font-semibold disabled:cursor-not-allowed text-gray-100', {
  variants: {
    variant: {
      default: 'bg-black-100 hover:bg-gray-900 active:bg-black-100 disabled:bg-gray-600',
      outline:
        'border border-black-200 hover:border-black-100 active:border-black-100 disabled:bg-gray-600 disabled:bg-gray-600',
    },
    size: {
      xs: 'rounded-lg py-2 px-4 text-xs',
      sm: 'rounded-lg py-2.5 px-4 text-lg ',
      md: 'rounded-xl py-3 px-8 text-lg',
      lg: 'rounded-xl py-4 px-10 text-xl',
      xl: 'rounded-xl py-5 px-24 text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children?: ReactNode;
}

export default function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(ButtonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}
