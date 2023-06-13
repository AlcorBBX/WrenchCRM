import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { AddressesList } from 'widgets/AddressesList/ui/AddressesList/AddressesList';
import { SearchAddress } from 'widgets/SearchAddress/ui/SearchAddress';

import { Services, getAddresses } from 'shared/lib/axios';

const addressesList: string[] = [
  'город Москва, улица Ленина 13, дом 32',
  'город Санкт-Петербург, улица Ленина 13, дом 32',
];

// TODO
export function MainPage() {
  // const { isLoading, error, data, isFetching } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     axios
  //       .get(
  //         'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  //       )
  //       .then((res) => res.data),
  // });

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: getAddresses,
  });

  if (isLoading) return 'Loading...';

  // @ts-ignore
  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  return (
    <main>
      <SearchAddress />
      <AddressesList addresses={addressesList} />
    </main>
  );
}
