import React, { Component } from "react";
import GroceriesList from "./GroceriesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";

class AddItemToBasket extends Component {
  render() {
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faLeaf} />
          Add Item To Cart
        </h3>
        <GroceriesList addOrRemoveOne={false} />;
      </div>
    );
  }
}

export default AddItemToBasket;
