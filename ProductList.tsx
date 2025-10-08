import React from 'react';
import { Product } from './type';

const Products: Product[] = [
    {id: 1, name: 'perfume'},
    {id: 2, name:'bottels'},
];

interface Props{
    onAddToCart: (Product: Product) => void;
}

const ProductList: React.FC<Props> =  ({ onAddToCart }) => (
    <div>
        <h2>Products</h2>
        {Products.map(product => (
            <li key={product.id}>
                {product.name}
                <button onClick={() => onAddToCart(product)}>Add To Cart</button>
            </li>
        ))}
    </div>
)

export default ProductList;