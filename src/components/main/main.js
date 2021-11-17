import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";
import Groceries from "./groceries";
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
          <input placeholder="Search for groceries" id="searchBar" />
        </div>
        <div id="groceriesShopping">
          <Groceries />
          <Basket />
        </div>
      </div>
    );
  }
}

export default Main;
