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
      classItem: this.props.basket || "",
      addOrRemoveOne: !this.props.addOrRemoveOne,
    };
  }
  render() {
    console.log(this.state.addOrRemoveOne);
    return (
      <ul className={`list-group ${this.state.classItem || ""}`}>
        {this.state.items.map((item) => (
          <GrocerieItem
            item={item}
            addOrRemoveOne={this.state.addOrRemoveOne}
          />
        ))}
      </ul>
    );
  }
}

class GrocerieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrRemoveOne: props.addOrRemoveOne || null,
    };
  }
  render() {
    return (
      <li className="list-group-item">
        <Button addOrRemoveOne={this.state.addOrRemoveOne} />
        {this.props.item}
      </li>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrRemoveOne: !this.props.addOrRemoveOne,
    };
  }
  render() {
    return (
      <button className="button">
        {" "}
        {this.state.addOrRemoveOne ? "-" : "+"}
      </button>
    );
  }
}

export default Groceries;

// function addToBasket(event) {
//   this.setState((prevState) => ({
//     basket: prevState.basket.push(event.target.value),
//   }));
// }
