import { type ReactNode } from 'react';

import { Logo } from '../Logo/Logo';
import css from './LayoutHeader.module.scss';

type Props = {
  rightContentSlot: ReactNode;
};

export function LayoutHeader(props: Props) {
  return (
    <header className={css.root}>
      <Logo />
      <div className={css.right}>{props.rightContentSlot}</div>
    </header>
  );
}
