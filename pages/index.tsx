import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Productos</h1>
      {productList.map((product, i) => (
        <div key={i}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
