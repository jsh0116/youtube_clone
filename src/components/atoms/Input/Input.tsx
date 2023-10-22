import React from 'react';

const Input = ({
  className,
  width,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  width?: string;
}) => {
  return (
    <input {...props} className={className} />
  );
};

export default Input;
