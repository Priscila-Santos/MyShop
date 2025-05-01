import { useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from '../redux/root-reducer';

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

    const total = cart.reduce((totalCart, product) => { 
        return totalCart + product.price; }, 0);

    return (
        <S.Container showCart={showCart}>
            <S.CartTitle>Carrinho</S.CartTitle>

            <S.CartProductList>
                {cart.map((product) => (
                    <S.CartProductItem key={product.id}>
                        <S.CartProductImage src={product.image} alt={product.title} />
                        <S.CartProducTitle>{product.title}</S.CartProducTitle>
                        <S.CartProductPrice>${product.price}</S.CartProductPrice>
                    </S.CartProductItem>
                ))}
            </S.CartProductList>
            <S.CartTotal>Total: ${total}</S.CartTotal>
        </S.Container>
    )
}