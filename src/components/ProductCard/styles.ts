import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 250px;
    height: 400px;
    object-fit: contain;

`;

export const ProductTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    min-height: 3rem;
    margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;
`;

export const Review = styled.span`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1rem;
    color: #666;

    svg {
        color: #f39c12;
    }
`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    padding: 0 1rem;
    background-color: blue;
    color: white;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    svg {
        font-size: 0.75rem;
    }
`;

export const RemoveFromCartButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    padding: 0 1rem;
    background-color: violet;
    color: black;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
`;