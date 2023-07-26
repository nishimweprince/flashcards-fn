import React, { FC, forwardRef, ForwardedRef } from 'react';
import PropTypes from 'prop-types';

interface TextAreaProps {
  className?: string;
  name?: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  ref?: ForwardedRef<HTMLTextAreaElement>;
}

const TextArea: FC<TextAreaProps> = 
  ({ label, labelClassName, className, rows, cols, value, onChange }) => {
    return (
      <label
        className={
          labelClassName ||
          'text-[1.6rem] font-medium flex w-full flex-col gap-4'
        }
      >
        {label}
        <textarea
          rows={rows || 5}
          cols={cols || 10}
          onChange={onChange}
          defaultValue={value}
          className={
            className ||
            'py-8 px-8 text-[1.5rem] border-[.1rem] border-primary rounded-md shadow-sm ease-in-out duration-100 focus:border-[.1rem] focus:border-primary focus:outline-none'
          }
        ></textarea>
      </label>
    );
  }

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
  ref: PropTypes.any,
};

export default TextArea;
