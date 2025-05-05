import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ProductCard, ProductCardProps } from "./ProductCard";
import * as cartSlice from "../../redux/Cart/cart-slice";

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const sampleProduct: ProductCardProps = {
  id: 1,
  title: "Produto Teste",
  price: 99.99,
  description: "Descrição do produto",
  category: "eletrônicos",
  image: "https://via.placeholder.com/250",
  rating: { rate: 4.5, count: 120 },
};

function renderWithStore(cartItems: ProductCardProps[] = []) {
  const store = mockStore({
    cartReducer: {
      cart: cartItems,
    },
  });

  return render(
    <Provider store={store}>
      <ProductCard product={sampleProduct} />
    </Provider>
  );
}

describe("ProductCard Component", () => {
    beforeEach(() => {
      mockDispatch.mockClear();
    });
  
    it("exibe as informações do produto corretamente", () => {
      renderWithStore();
  
      expect(screen.getByText("Produto Teste")).toBeInTheDocument();
      expect(screen.getByText("$99.99")).toBeInTheDocument();
      expect(screen.getByAltText("Produto Teste")).toHaveAttribute("src", sampleProduct.image);
    });

  
    it("mostra botão de adicionar ao carrinho quando produto não está no carrinho", () => {
      renderWithStore([]);
  
      expect(screen.getByText(/Adicionar ao Carrinho/i)).toBeInTheDocument();
    });
  
    it("mostra botão de remover do carrinho quando produto está no carrinho", () => {
      renderWithStore([sampleProduct]);
  
      expect(screen.getByText(/Remover do Carrinho/i)).toBeInTheDocument();
    });
  
    it("chama dispatch para adicionar ao carrinho", () => {
      renderWithStore([]);
  
      fireEvent.click(screen.getByText(/Adicionar ao Carrinho/i));
  
      expect(mockDispatch).toHaveBeenCalledWith(cartSlice.addProduct(sampleProduct));
    });
  
    it("chama dispatch para remover do carrinho", () => {
      renderWithStore([sampleProduct]);
  
      fireEvent.click(screen.getByText(/Remover do Carrinho/i));
  
      expect(mockDispatch).toHaveBeenCalledWith(cartSlice.removeProduct(sampleProduct));
    });
  });
  