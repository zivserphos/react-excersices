import React, { Component } from "react";
import Groceries from "./groceries";
import "./main.scss";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  addOneToCart = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeOneFromBasket() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return <Groceries className="basket" />;
  }
}

export default Basket;
