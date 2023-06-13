import { Link } from 'react-router-dom';

import { Icon } from 'shared/ui';

import css from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <div className={css.root}>
        <Icon type="key" />
        Wrench CRM
      </div>
    </Link>
  );
};
