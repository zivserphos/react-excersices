import React, { Component } from "react";
import "./main.scss";
import { GrocerieItem, GroceriesList } from "./GroceriesList";
// import AddItemToBasket from "./AddItem";
import Basket from "./Basket";

const items = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushroom",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter",
  "Chicken",
];

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      basket: [{ item: "banana", quantity: 2 }],
    };
  }
  addOneToCart = (item) => {
    let newBasket = [...this.state.basket];
    const itemIndex = this.state.basket.findIndex((obj) => obj.item === item);
    if (itemIndex >= 0) {
      newBasket[itemIndex].quantity += 1;
    } else {
      newBasket.push({
        item: item,
        quantity: 1,
      });
    }
    this.setState({
      basket: newBasket,
    });
  };

  removeOneFromCart = (item) => {
    let newBasket = [...this.state.basket];
    const itemIndex = this.state.basket.findIndex((obj) => obj.item === item);
    if (newBasket[itemIndex].quantity > 1) {
      newBasket[itemIndex].quantity -= 1;
    } else {
      newBasket.splice(itemIndex, 1);
    }
    this.setState({
      basket: newBasket,
    });
  };

  render() {
    return (
      <div id="main">
        <div id="search">
          Search
          <input placeholder="Search for GroceriesList" id="searchBar" />
        </div>
        <div id="GroceriesListShopping">
          <GroceriesList items={this.state.items} add={this.addOneToCart} />
          <Basket basket={this.state.basket} remove={this.removeOneFromCart} />
        </div>
      </div>
    );
  }
}

export default Main;
