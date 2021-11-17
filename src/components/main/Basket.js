import React, { Component } from "react";
import GroceriesList from "./GroceriesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
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
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faShoppingBasket} />
          GroceriesList
        </h3>
        <GroceriesList basket={"basket"} addOrRemoveOne={true} />;
      </div>
    );
  }
}

export default Basket;
