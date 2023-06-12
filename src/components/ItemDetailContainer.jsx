import React from 'react'
import ProductsCard from './ProductsCard'

const ItemDetailContainer = ({ productsData }) => {
    return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'3rem' }}>
        {productsData.map((product) => {
    return <ProductsCard key={product.id} productData={product} />;
        })}
    </div>
    );
};


export default ItemDetailContainer