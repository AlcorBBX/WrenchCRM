import { Button, Icon } from 'shared/ui';
import { Input } from 'shared/ui/Input';

import css from './SearchAddress.module.scss';

interface Props {}

export const SearchAddress = ({}: Props) => {
  return (
    <>
      {/* TODO move in shared Title component */}
      <h2 className={css.title}>Поиск адресов</h2>
      {/* TODO move in shared */}
      {/* <p className={css.description}>Введите интересующий вас адрес</p> */}

      {/* TODO move in entity */}
      <div className={css.wrapper}>
        <Input
          className={css.input}
          label="Введите интересующий вас адрес"
          placeholder="Введите интересующий вас адрес"
        />
        <Button className={css.button}>
          <Icon className={css.buttonIcon} type="magnifier" />
          Поиск
        </Button>
      </div>
    </>
  );
};
