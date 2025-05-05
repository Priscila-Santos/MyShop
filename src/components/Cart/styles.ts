import styled from "styled-components";

interface ContainerProps {
    $showCart: boolean;
  }
  
  export const Container = styled.aside<ContainerProps>`
    right: ${(props) => (props.$showCart ? "0" : "-350px")};

    position: fixed;
    top: 0;
    transition: right 0.5s ease-in-out;
    
    width: 350px;
    height: 100vh;
    //margin-top: 60px;
    background-color: white;

    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;

  

/* export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0" : "-350px")};
    transition: right 0.5s ease-in-out;
    
    width: 350px;
    height: 100vh;
    //margin-top: 60px;
    background-color: white;

    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

`; */

export const CartTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
`;

export const CartProductList = styled.ul`
    list-style: none;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartProductItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;
export const CartProductImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 1rem;
    object-fit: cover;
`;

export const CartProducTitle = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    min-height: 3rem;
`;
export const CartProductPrice = styled.strong`
    font-size: 1rem;
    font-weight: 500; 
    color: #666;
`;

export const RemoveProduct = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #ff0000;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 1rem;
    &:hover {
        color: #ff4d4d;
    }
`;

export const CartTotal = styled.strong``;


