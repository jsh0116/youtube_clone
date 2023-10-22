import { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'blue' | 'mint' | 'secondary' | 'outline';
  size?: 'small' | 'medium';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({
  theme = 'primary',
  size = 'medium',
  type = 'button',
  className,
  children,
  ...props
}: Props) => {

  return <button type={type} {...props} className={className}>{children}</button>;
};

export default Button;
