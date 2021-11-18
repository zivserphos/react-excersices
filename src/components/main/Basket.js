import React, { Component } from "react";
import { GrocerieItem } from "./GroceriesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faShoppingBasket} />
          Groceries List
        </h3>
        <ul className="list-group">
          {this.props.basket.map((obj, index) => {
            return (
              <GrocerieItem
                key={index}
                item={obj.item}
                quantity={obj.quantity}
                func={this.props.remove}
                mathSign="-"
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Basket;
