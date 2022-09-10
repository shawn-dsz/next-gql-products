//next/head
import Head from 'next/head';
import { queryClient, getProducts } from '../src/api';
import { dehydrate, useQuery } from 'react-query';

export async function getServerSideProps() {
  await queryClient.prefetchQuery('getProducts', () => getProducts());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery('getProducts', () => getProducts());
  return <div>{JSON.stringify(data)}</div>;
}
