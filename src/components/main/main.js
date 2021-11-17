import React, { Component } from "react";
import "./main.scss";
import GroceriesList from "./GroceriesList";
import AddItemToBasket from "./AddItem";
import Basket from "./Basket";

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        <div id="search">
          Search
          <input placeholder="Search for GroceriesList" id="searchBar" />
        </div>
        <div id="GroceriesListShopping">
          <AddItemToBasket />
          <Basket />
        </div>
      </div>
    );
  }
}

export default Main;
