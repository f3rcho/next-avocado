import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';
import ProductList from '@components/ProductList/ProductList';
import { API_URL } from 'common/const/const';
import React from 'react';

export const getServerSideProps = async () => {
  try {
    const response = await fetch(API_URL);
    const { data: productList }: TAPIAvoResponse = await response.json();

    return {
      props: {
        productList,
      },
    };
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
