import { FC, InputHTMLAttributes, memo, ReactElement } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactElement;
  ariaLabel?: string;
}

const Input: FC<InputProps> = ({ className, icon, ariaLabel, ...props } = {
  className: '',
  ariaLabel: '',
}) => (
    <div className="flex items-center bg-white rounded-md px-3 py-1.5 shadow-md fill-gray-400 gap-1 min-h-[30px]">
      {icon}
      <input
        aria-label={ariaLabel}
        className={`bg-white text-sm font-medium text-gray-700 w-full outline-none focus:shadow-none ${className}`}
        {...props}
      />
    </div>
  )
;

export default memo(Input);