import { IconType } from 'shared/ui/Icon/Icon';

export interface SidebarItemType {
  id: number;
  path: string;
  text: string;
  icon?: IconType;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    id: 1,
    path: '/',
    icon: 'home',
    text: 'Главная',
  },
  {
    id: 2,
    path: '',
    icon: 'magnifier',
    text: 'Поиск адресов',
  },
  {
    id: 3,
    path: '',
    icon: 'tables',
    text: 'Таблицы',
  },
  {
    id: 4,
    path: '',
    icon: 'calendar',
    text: 'Календарь',
  },
  {
    id: 5,
    path: '',
    icon: 'map',
    text: 'Карты',
  },
  {
    id: 6,
    path: '',
    icon: 'widget',
    text: 'Виджеты',
  },
  {
    id: 7,
    path: '',
    icon: 'setting',
    text: 'Настройки',
  },
  {
    id: 8,
    path: '',
    icon: 'profile',
    text: 'Настройки профиля',
  },
  {
    id: 9,
    path: '',
    icon: 'finance',
    text: 'Управление финансами',
  },
  {
    id: 10,
    path: '',
    icon: 'exit',
    text: 'Выход',
  },
];
