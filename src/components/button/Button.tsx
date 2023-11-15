import { forwardRef, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>(({children, ...props}, ref) => {
  return <button ref={ref} {...props}>{children}</button>;
});
