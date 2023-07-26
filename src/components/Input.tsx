import React, { FC, Ref, forwardRef } from 'react';
import PropTypes from 'prop-types';

interface InputProps {
  type: string;
  className?: string;
  name?: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: Ref<HTMLInputElement>
}

const Input: FC<InputProps> = 
  (
    {
      type,
      className,
      name,
      label,
      labelClassName,
      placeholder,
      value,
      onChange,
    },
  ) => {
    return (
      <label
        className={
          labelClassName ||
          'text-[1.5rem] flex flex-col gap-4 w-full max-w-[50rem]'
        }
      >
        {label}
        <input
          type={type}
          defaultValue={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={
            className ||
            'py-[1rem] px-8 text-[1.5rem] rounded-md border-primary border-[.1rem] shadow-sm ease-in-out duration-100 focus:border-[.1rem] focus:border-primary focus:outline-none'
          }
        />
      </label>
    );
  }

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  ref: PropTypes.any,
};

export default Input;
