import { memo } from 'react';

import { SidebarItemType } from 'widgets/Sidebar/model/items';

import { classNames } from 'shared/lib';
import { AppLink, Icon } from 'shared/ui';

// import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  if (!item) return;
  // if (!collapsed) return;

  return (
    <AppLink
      to={item.path}
      className={classNames(css.item, { [css.collapsed]: collapsed })}
    >
      {/* <item.Icon className={css.icon} /> */}
      {item.icon && <Icon type={item.icon} />}
      <span className={css.link}>{item.text}</span>
    </AppLink>
  );
});
