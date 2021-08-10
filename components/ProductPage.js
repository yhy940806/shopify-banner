import { Page } from '@shopify/polaris';
import React from 'react';

import ProductList from '../components/ProductList';

function ProductPage({ setIsOpen, products }) {
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Product",
        onAction: () => setIsOpen(true)
      }}
    >
      <ProductList products={products} />
    </Page>
  );
}
