import { cva } from 'cva';

export const ButtonVariants = cva(['btn'], {
  variants: {
    intent: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      neutral: ['btn-neutral'],
      accent: 'btn-accent',
      info: 'btn-info',
      warning: 'btn-warning',
      error: 'btn-error',
      ghost: 'btn-ghost',
      link: 'btn-link',
      outline: 'btn-outline',
      active: 'btn-active',
      disabled: 'btn-disabled',
      glass: 'glass',
      success: 'btn-success'
    },
    size: {
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      wide: 'btn-wide',
      block: 'btn-block',
      circle: 'btn-circle',
      square: 'btn-square'
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
