import { memo, useRef, useState, useSyncExternalStore } from 'react';

import { SidebarItemList } from 'widgets/Sidebar/model/items';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button/Button';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import css from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const useWindowDimensions = () => {
  // the 3rd parameter is optional and only needed for server side rendering
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const subscribe = (callback: any) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

const getServerSnapshot = () => {
  return {
    width: 0,
    height: 0,
  };
};

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  // const ref = useRef<HTMLDivElement | null>(null);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // console.log(ref);

  return (
    <div
      className={classNames(css.sidebar, { [css.collapsed]: collapsed }, [
        className,
      ])}
      // ref={ref}
      // data-testid="sidebar"
    >
      <span className={css.title}>Меню</span>
      <Button
        className={css.collapseBtn}
        onClick={onToggle}
        // data-testid="sidebar-toggle"
        // active
        // size={ButtonSize.L}
        // square
        // isLoading={true}
      >
        Меню
        {collapsed ? '>' : '<'}
      </Button>
      <div className={css.items}>
        {SidebarItemList.map((item) => (
          <SidebarItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={css.switchers}></div>
    </div>
  );
});
