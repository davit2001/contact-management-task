import { ButtonHTMLAttributes, FC, memo, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'error';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ color, children }) => (
  <button
    className={`px-3 py-1.5 bg-white font-medium border-2 border-gray-300 rounded-md transition-colors duration-200 ease-in-out 
      ${color === 'error' ? 'text-red hover:bg-red-100 hover:border-red' : 'text-blue hover:bg-blue-100 hover:border-blue'}`}
    aria-label="Button"
  >
    {children}
  </button>
);

export default memo(Button);