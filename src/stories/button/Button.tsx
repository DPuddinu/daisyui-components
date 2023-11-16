import { VariantProps } from 'cva';
import { PropsWithChildren, forwardRef } from 'react';
import { ButtonVariants } from './ButtonVariants';

type ButtonProps = VariantProps<typeof ButtonVariants> & PropsWithChildren;

export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>(({ children, size, intent, ...props }, ref) => {
  return (
    <button ref={ref} {...props} className={ButtonVariants({ intent, size })}>
      {children}
    </button>
  );
});
