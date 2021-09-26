import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id, limit, page },
  } = useRouter();
  return (
    <div>
      <h1>
        Hello from ProductItem ID: {id}, with limit: {limit} and page: {page}
      </h1>
    </div>
  );
};

export default ProductItem;
