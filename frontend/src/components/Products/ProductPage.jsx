import React, { Suspense } from 'react';
import ProductList from '@/components/Products/ProductList';

export default function ProductPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}