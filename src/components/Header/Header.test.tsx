import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

const mockStore = configureStore<Partial<RootReducer>>();
const initialUser = { name: "Pricila", email: "ps@email" };

describe("Header", () => {
  let store: any;

  const renderWithStore = (state: Partial<RootReducer>) => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    return render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  };

  it("deve renderizar o título do header", () => {
    renderWithStore({ userReducer: { user: null }, cartReducer: { cart: [] } });
    expect(screen.getByText("MyShop.")).toBeInTheDocument();
  });

  it("deve exibir o botão Login quando o usuário estiver deslogado", () => {
    renderWithStore({ userReducer: { user: null }, cartReducer: { cart: [] } });
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("deve exibir o botão Logout quando o usuário estiver logado", () => {
    renderWithStore({ userReducer: { user: initialUser }, cartReducer: { cart: [] } });
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  it("deve despachar login ao clicar em Login", () => {
    renderWithStore({ userReducer: { user: null }, cartReducer: { cart: [] } });

    const loginButton = screen.getByRole("button", { name: /login/i });
    userEvent.click(loginButton);

    expect(store.dispatch).toHaveBeenCalledWith(login(initialUser));
  });

  it("deve despachar logout ao clicar em Logout", () => {
    renderWithStore({ userReducer: { user: initialUser }, cartReducer: { cart: [] } });

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    userEvent.click(logoutButton);

    expect(store.dispatch).toHaveBeenCalledWith(logout({}));
  });

});
