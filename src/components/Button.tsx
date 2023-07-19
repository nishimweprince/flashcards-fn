import Link from 'next/link';
import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  route?: string;
  value?: string | object;
  className?: string;
}

const Button: FC<ButtonProps> = ({ route, value, className }) => {
  return (
    <Link
      href={route || '#'}
      className={
        className ||
        'py-4 px-8 bg-primary text-white text-[1.5rem] flex items-center justify-center rounded-md ease-in-out duration-300 hover:scale-95'
      }
    >
      {typeof value === 'string' ? value : JSON.stringify(value)}
    </Link>
  );
};

Button.propTypes = {
  route: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  className: PropTypes.string,
};

export default Button;
