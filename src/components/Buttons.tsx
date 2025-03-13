import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

const ButtonVariants = cva(
  'flex items-center justify-center font-semibold cursor-pointer disabled:cursor-not-allowed text-gray-100',
  {
    variants: {
      size: {
        login: 'w-[640px] h-[48px] text-[16px] rounded-[6px]',
        signup: 'w-[640px] h-[48px] text-[16px] rounded-[6px]',
        search: 'w-[136px] h-[56px] text-[16px] rounded-[4px]',
        tags: 'w-[127px] h-[58px] text-[18px] rounded-[15px]',
        reservation: 'w-[339px] h-[56px] rounded-[4px]',
        save: 'w-[120px] h-[48px] text-[16px] rounded-[4px]',
        review: 'w-[144px] h-[43px] text-[16px] rounded-[6px]',
        write: 'w-[432px] h-[56px] text-[16px] rounded-[4px]',
        manage: 'w-[120px] h-[48px] text-[16px] rounded-[4px]',
      },
      variant: {
        default: 'bg-green-100 hover:bg-gray-900 active:bg-black-100 disabled:bg-green-10',
        outline:
          'border border-black-200 hover:border-black-100 active:border-green-100 disabled:bg-green-10 disabled:text-gray-500 text-black-100',
      },
    },
    defaultVariants: {
      size: 'search',
      variant: 'default',
    },
  },
);
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
