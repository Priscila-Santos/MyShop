import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi"
import * as S from "./styles"

export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonWrapper>
                    <S.AuthButton>Login {FiLogIn({})} </S.AuthButton>
                    <S.CartButton>Carrinho {FiShoppingCart({})} </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}