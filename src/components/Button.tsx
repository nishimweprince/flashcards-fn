import Link from 'next/link';
import React, { FC, MouseEvent } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  route?: string;
  value?: string | object;
  className?: string;
  submit?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const Button: FC<ButtonProps> = ({ route, value, className, submit = false, type, onClick }) => {
  if (submit) {
    return (
      <button
        className={
          className ||
          'py-4 px-8 bg-primary text-white text-[1.5rem] flex items-center justify-center rounded-md ease-in-out duration-300 hover:scale-[.99]'
        }
        type={type || 'submit'}
      >
        {typeof value === 'string' ? value : JSON.stringify(value)}
      </button>
    );
  }
  return (
    <Link
      href={route || '#'}
      className={
        className ||
        'py-4 px-8 bg-primary text-white text-[1.5rem] flex items-center justify-center rounded-md ease-in-out duration-300 hover:scale-[.99]'
      }
      onClick={onClick}
    >
      {typeof value === 'string' ? value : JSON.stringify(value)}
    </Link>
  );
};

Button.propTypes = {
  route: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  className: PropTypes.string,
  submit: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
