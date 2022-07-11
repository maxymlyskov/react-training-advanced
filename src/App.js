import "./App.css";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

import React, { Component } from "react";
import MovieRow from "./context/MovieRow";
import MovieList from "./context/MovieList";
import Login from "./context/Login";
import CartContext from "./context/cartContext";

export default class App extends Component {
  state = { currentUser: null };

  handleLoggedIn = (username) => {
    const user = { name: "Maxym" };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MovieList />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}
