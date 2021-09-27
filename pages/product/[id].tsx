import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id, limit, page },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <section>
        <h1>
          ProductItem ID: {id}
          <br />
          {product?.name}
        </h1>
        <br />
        {product?.attributes.description}
      </section>
    </div>
  );
};

export default ProductItem;
