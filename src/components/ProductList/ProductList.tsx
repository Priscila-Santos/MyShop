import { useEffect, useState } from 'react';
import { ProductCard, ProductCardProps } from '../ProductCard/ProductCard';
import * as S from './styles';

export const ProductList: React.FC = () => {
    const [products, setProsucts] = useState<ProductCardProps[]>([]);

     useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
                .then((data) => setProsucts(data))
                .catch((error) => console.error('Error fetching products:', error));
        }, []);
    return(
        <S.Container>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </S.Container>
    )
}