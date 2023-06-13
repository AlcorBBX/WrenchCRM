import { Icon } from 'shared/ui';

import css from './LayoutProfileCard.module.scss';

export const LayoutProfileCard = () => {
  return (
    <div className={css.root}>
      <Icon type="user" />
      Имя Фамилия
    </div>
  );
};
