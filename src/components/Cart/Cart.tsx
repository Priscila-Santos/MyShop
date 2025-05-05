import { useDispatch } from "react-redux";
import * as S from "./styles";

import { removeProduct } from "../../redux/Cart/cart-slice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductCardProps } from "../ProductCard/ProductCard";

interface CartProps {
  showCart: boolean;
  cart: ProductCardProps[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  const dispatch = useDispatch();

  return (
    <S.Container showCart={showCart}>
      <S.CartTitle>Carrinho</S.CartTitle>

      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.CartProductImage src={product.image} alt={product.title} />
            <S.CartProducTitle>{product.title}</S.CartProducTitle>
            <S.CartProductPrice>
              ${product.price}
            </S.CartProductPrice>
            <S.RemoveProduct onClick={() => dispatch(removeProduct(product))}>
              {RiDeleteBin6Line({})}
            </S.RemoveProduct>
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
