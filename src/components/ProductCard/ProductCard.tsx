// import { FiShoppingCart } from "react-icons/fi"
// import { AiFillStar, AiOutlineStar } from "react-icons/ai"
// import * as S from './styles';

// export type ProductCardProps = {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating:  {rate: number, count: number};
// }

// export const ProductCard: React.FC<{ product: ProductCardProps}> = ({product}) => {

//     return (
//         <S.Card key={product.id}>
//                 <S.ProductImage src={product.image} alt={product.title} />
//                 <S.ProductTitle>{product.title}</S.ProductTitle>
//                 <S.ReviewPriceContainer>
//                         <S.Review>
//                             {Array.from({ length: 5}).map((_, index) => index < Math.round(product.rating.rate) ? (
//                                 AiFillStar({})
//                             ) : (
//                                 AiOutlineStar({})
//                             )
//                             )}
//                             ({product.rating.rate})             
//                         </S.Review>
//                     <S.Price>${product.price}</S.Price>
//                 </S.ReviewPriceContainer>
//                 <S.AddToCartButtonWrapper>
//                     <S.AddToCartButton> 
//                         Adicionar ao Carrinho {FiShoppingCart({})}
//                     </S.AddToCartButton>
//                 </S.AddToCartButtonWrapper>
//         </S.Card>
//     )
// }

import { FiShoppingCart } from "react-icons/fi"
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline  } from "react-icons/md";
import * as S from './styles';

export type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number, count: number };
}

export const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const fullStars = Math.floor(product.rating.rate);
  const hasHalfStar = product.rating.rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <S.Card key={product.id}>
      <S.ProductImage src={product.image} alt={product.title} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {/* Estrelas cheias */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <span key={`full-${product.id}-${index}`}>
              {MdOutlineStar({})}
            </span>
          ))}
          
          {/* Estrela pela metade */}
          {hasHalfStar && (
            <span key={`half-${product.id}`}>
              {MdOutlineStarHalf({})}
            </span>
          )}
          
          {/* Estrelas vazias */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <span key={`empty-${product.id}-${index}`}>
              {MdOutlineStarOutline({})}
            </span>
          ))}

          ({product.rating.rate})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho {FiShoppingCart({})}
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
}
