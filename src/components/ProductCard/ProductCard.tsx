import { FiShoppingCart } from "react-icons/fi";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

export type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const ProductCard: React.FC<{ product: ProductCardProps }> = ({
  product,
}) => {
  const fullStars = Math.floor(product.rating.rate);
  const hasHalfStar = product.rating.rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  // O useSelector é usado para acessar o estado do Redux. Aqui, é possível acessar o estado do carrinho, se necessário.
  const dispatch = useDispatch();

  const isProductOnCart =
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;

  function handleAddProductToCart() {
    // O dispatch é uma função do Redux que permite enviar ações para o store. Aqui, ele é usado para adicionar um produto ao carrinho.
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    // Aqui você pode despachar uma ação para remover o produto do carrinho
  
    dispatch(removeProduct(product));
  }
  // O useDispatch é usado para despachar ações para o Redux. Aqui, ele é usado para adicionar ou remover produtos do carrinho.

  return (
    <S.Card key={product.id}>
      <S.ProductImage src={product.image} alt={product.title} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {/* Estrelas cheias */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <span key={`full-${product.id}-${index}`}>{MdOutlineStar({})}</span>
          ))}
          {/* Estrela pela metade */}
          {hasHalfStar && (
            <span key={`half-${product.id}`}>{MdOutlineStarHalf({})}</span>
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
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho {FiShoppingCart({})}
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho {FiShoppingCart({})}
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
