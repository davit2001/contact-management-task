import { ButtonHTMLAttributes, FC, memo, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'error' | 'success';
}

const buttonColorsStyles = {
  primary: 'text-blue hover:bg-blue-100 hover:border-blue',
  error: 'text-red hover:bg-red-100 hover:border-red',
  success: 'text-green-400 hover:bg-green-100 hover:border-green-100',
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ color = 'primary', children, ...props }) => (
  <button
    className={`px-3 py-1.5 bg-white font-medium border-2 border-gray-300 rounded-md transition-colors duration-200 ease-in-out 
      ${buttonColorsStyles[color]}`}
    aria-label="Button"
    {...props}
  >
    {children}
  </button>
);

export default memo(Button);