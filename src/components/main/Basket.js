import React, { Component } from "react";
import { GrocerieItem } from "./GroceriesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //counter: 0,
    };
  }
  render() {
    console.log(this.props.add);
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faShoppingBasket} />
          Groceries List
        </h3>
        <ul className="list-group">
          {console.log(this.props.basket[0])}
          {this.props.basket.map((obj, index) => {
            return (
              <GrocerieItem
                key={index}
                item={obj.item}
                quantity={obj.quantity}
                add={this.props.add}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Basket;
