import { tv } from 'tailwind-variants';

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
  disabled: boolean;
  color: 'primary' | 'secondary';
  font: 'medium' | 'semibold';
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  type,
  disabled,
  color,
  font,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyle({ color, font })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
