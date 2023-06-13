import { memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib';

import css from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo(
  ({
    to,
    children,
    className,
    theme = 'primary',
    ...otherProps
  }: AppLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(css.applink, {}, [className, css[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  },
);
