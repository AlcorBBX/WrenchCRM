import { type ReactNode } from 'react';

import { classNames } from 'shared/lib';
import { Icon } from 'shared/ui';

import css from './Button.module.scss';

type ButtonTheme = 'primary' | 'clear';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: 'm' | 's';
  type?: 'submit';
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  className,
  children,
  isLoading,
  size = 'm',
  theme = 'primary',
  disabled = false,
  type,
}: Props) => {
  const mods = {
    [css[theme]]: true,
    // [css.square]: square,
    // [css.active]: active,
    [css[size]]: true,
    [css.disabled]: disabled,
  };

  return (
    <button
      className={classNames(css.button, mods, [className, css[theme]])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Icon className={css.loader} type="loader" /> : children}
    </button>
  );
};
