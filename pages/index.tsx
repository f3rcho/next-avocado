import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';
import ProductList from '@components/ProductList/ProductList';
import { API_URL } from 'common/const/const';
import React from 'react';
import Link from 'next/link';

// On static, just one request is made the build the web
export const getStaticProps = async () => {
  const response = await fetch(`${API_URL}/avo`);
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

// On server side, one request is made each time the user connects to build the web
// export const getServerSideProps = async () => {
//     const response = await fetch(`${API_URL}/avo`);
//     const { data: productList }: TAPIAvoResponse = await response.json();

//     return {
//       props: {
//         productList,
//       },
//     };
// };

const Home = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href='/yes-or-no'>
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
