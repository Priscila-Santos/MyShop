import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart"; 

// Mocking the react-redux module to avoid using the actual Redux store in tests
jest.mock("react-redux");

describe("Cart > Unit tests", () =>{
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElemet = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElemet).toBeEmptyDOMElement()
  });
});

  // it('should calculate the total price of products in the cart', () => {
  //   // Test implementation
  // });

  // it('should remove a product from the cart when the remove button is clicked', () => {
  //   // Test implementation
  // });