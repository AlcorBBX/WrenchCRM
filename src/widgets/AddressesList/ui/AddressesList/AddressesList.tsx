import css from './AddressesList.module.scss';

interface Props {
  addresses: string[];
}

export const AddressesList = ({ addresses }: Props) => {
  return (
    <>
      <h2 className={css.title}>Адреса</h2>
      <div className={css.items}>
        {addresses.map((address, index) => (
          <p key={index}>{address}</p>
        ))}
      </div>
    </>
  );
};
