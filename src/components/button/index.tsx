import { tv } from 'tailwind-variants';
import type { JSX } from 'solid-js';

// Tailwind Variants for button
const buttonStyle = tv({
  base: 'inline-flex items-center justify-center gap-x-2 rounded-lg border px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: {
      primary: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
      secondary:
        'border-gray-200 text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800',
    },
    font: {
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
});

interface ButtonProps {
  type: 'submit' | 'button';
  disabled?: boolean;
  color: 'primary' | 'secondary';
  font: 'medium' | 'semibold';
  onClick?: () => void;
  children: JSX.Element;
  class?: string;
}

export default function Button({
  type,
  disabled = false,
  color,
  font,
  onClick,
  children,
  class: className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      class={buttonStyle({ color, font, className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
