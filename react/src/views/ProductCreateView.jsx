import React from 'react';
import PageComponent from "../components/PageComponent.jsx";
import ProductCreateComponent from "../components/ProductsComponents/ProductCreateComponent.jsx";

const ProductCreateView = () => {
  return (
    <PageComponent title="Criar novo plano">
     <ProductCreateComponent />
    </PageComponent>
  );
};

export default ProductCreateView;
