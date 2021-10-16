import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';
import ProductList from '@components/ProductList/ProductList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
