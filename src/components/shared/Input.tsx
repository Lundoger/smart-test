import clsx from 'clsx';
import { X } from 'lucide-react';
import { forwardRef, InputHTMLAttributes, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  togglePassword?: boolean;
  hasError?: boolean;
  onClear?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, hasError, placeholder, type = 'text', onClear, value, ...props },
  ref
) {
  {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleOnBlur = () => {
      if (value === '') {
        setIsFocus(false);
      }
    };

    return (
      <div className={clsx('relative', className)}>
        <label className={clsx('block h-[50px] rounded-lg bg-transparent')}>
          <span
            className={clsx(
              'basic-transition absolute left-5 -translate-y-[50%] text-textDark',
              !isFocus && 'top-[25px]',
              isFocus && 'top-[13px] text-sm'
            )}
          >
            {placeholder}
          </span>
          <input
            {...props}
            className={clsx(
              'basic-transition h-full w-full rounded-lg border-2 border-solid border-bgSecondary bg-transparent pl-[20px] pr-[40px] pt-[20px] text-sm outline-none',
              isFocus && 'border-textDark',
              hasError && 'border-red-700 text-red-700'
            )}
            onBlur={handleOnBlur}
            onFocus={() => setIsFocus(true)}
            type={type}
            ref={ref}
            value={value}
          />
        </label>
        {onClear && (
          <button
            className={clsx(
              'absolute right-[10px] top-[50%] h-6 w-6 -translate-y-[50%]',
              'basic-transition pointer-events-none opacity-0',
              value && 'pointer-events-auto opacity-100'
            )}
            onClick={onClear}
            type="button"
          >
            <X color="#ecdfcc" />
          </button>
        )}
      </div>
    );
  }
});

export default Input;
