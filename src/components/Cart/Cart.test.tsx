import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart"; 
import userEvent from '@testing-library/user-event';
import { removeProduct } from '../../redux/Cart/cart-slice';


const mockDispatch = jest.fn();

// Mocking the react-redux module to avoid using the actual Redux store in tests
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Description 1",
    category: "Category 1",
    image: "image1.jpg",
    rating: { rate: 4.5, count: 10 },
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "Description 2",
    category: "Category 2",
    image: "image2.jpg",
    rating: { rate: 3.5, count: 5 },
  },
];

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

  it("should render a cart with products correctly", () => {

    render(<Cart showCart={true} cart={mockProducts} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElemet = screen.getByRole("list");
    const cartListItem = screen.getAllByRole("listitem");
    const firtTitleElement = screen.getByText(mockProducts[0].title);
    const secondTitleElement = screen.getByText("Product 2");


    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$30");
    expect(cartListElemet).not.toBeEmptyDOMElement();
    expect(cartListItem.length).toBe(2);
    expect(firtTitleElement).toBeInTheDocument();
    expect(secondTitleElement).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(<Cart showCart={true} cart={[mockProducts[0]]} />);

    const removeProductButton = screen.getByRole("button", {});
    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(mockProducts[0]));
  })
});

