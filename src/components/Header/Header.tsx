import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { Cart } from "../Cart/Cart";
import * as S from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/root-reducer";

export const Header: React.FC = () => {
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

    const dispatch = useDispatch();

    const isLogged = user !== null;
    const [showCart, setShowCart] = useState(false);

    function handleUserAuth() {
        if(user === null) {
            dispatch({ 
                type: "user/login",
                payload: { 
                    name: "Lucas", 
                    email: "@email",
                }
            });
        } else {
            dispatch({ 
                type: "user/logout",
            });
        }
    }

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonWrapper showCart={showCart}>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"} {isLogged ? FiLogOut({}) : FiLogIn({})}
                       
                    </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho {FiShoppingCart({})}
                    </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
            <Cart showCart={showCart}/>
        </S.StyledHeader>
    )
}