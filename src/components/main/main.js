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
    console.log(item);
    let newBasket = [...this.state.basket];
    const itemIndex = this.state.basket.findIndex((obj) => obj.item === item);
    if (itemIndex >= 0) {
      newBasket[itemIndex].quantity += 1;
    } else {
      newBasket.push({
        item: item,
        quantity: 1,
      });
      console.log(newBasket);
    }
    // itemIndex >= 0
    //   ? (newBasket[itemIndex].quantity += 1)
    // : newBasket.push({
    //     item: item,
    //     quantity: 1,
    //   });
    this.setState({
      basket: newBasket,
    });
    //console.log(newBasket);
    //return newBasket;
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
          <Basket basket={this.state.basket} />
        </div>
      </div>
    );
  }
}

export default Main;
