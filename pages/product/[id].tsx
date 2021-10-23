import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import { API_URL } from 'common/const/const';

// we need to use getStaticPath together with getStaticProps in order to render dynamically
export const getStaticPath = async () => {
  const response = await fetch(`${API_URL}/avo`);
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: id }));

  return {
    //statically generate all paths
    paths,
    // display 404 for everything else
    fallback: false,
  };
};

// called at build time, we need to know the avos to render. Thats why we need getStaticPath
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`${API_URL}/avo/${id}`);
  const product: TProduct = await response.json();

  // Pass post data to the page via props
  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
