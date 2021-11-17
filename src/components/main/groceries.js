import React, { Component } from "react";
import "./main.scss";

class Groceries extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      ],
    };
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.items.map((item) => (
          <GrocerieItem item={item} button={true} />
        ))}
      </ul>
    );
  }
}

class GrocerieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Isbutton: props.button,
    };
  }
  render() {
    return (
      <li className="list-group-item">
        {this.state.Isbutton && <Button />}
        {this.props.item}
      </li>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: <button className="button">+</button>,
    };
  }
  render() {
    return this.state.button;
  }
}

export default Groceries;

// function addToBasket(event) {
//   this.setState((prevState) => ({
//     basket: prevState.basket.push(event.target.value),
//   }));
// }
