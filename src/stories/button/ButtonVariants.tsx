import { cva } from 'cva';

export const ButtonVariants = cva(['btn w-20 h-10 '], {
  variants: {
    intent: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary']
    },
    size: {
      xs: ['btn-xs'],
      sm: ['btn-sm'],
      md: ['btn-md'],
      lg: ['btn-lg']
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'md'
    }
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'md'
  }
});
