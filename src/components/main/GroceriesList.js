import React, { Component } from "react";
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class GroceriesList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      classItem: this.props.basket || "",
      addOrRemoveOne: this.props.addOrRemoveOne,
    };
  }
  render() {
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faLeaf} />
          Add Item To Cart
        </h3>
        <ul className={`list-group ${this.state.classItem || ""}`}>
          {this.state.items.map((item, index) => (
            <GrocerieItem
              add={this.props.add}
              key={index}
              item={item}
              addOrRemoveOne={this.state.addOrRemoveOne}
            />
          ))}
        </ul>
      </div>
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
        <button className="button" onClick={this.props.add}>
          {this.state.addOrRemoveOne ? "-" : "+"}
        </button>
        {this.props.quantity ? `${this.props.quantity}` : ""}
        {` ${this.props.item}`}
      </li>
    );
  }
}

export { GroceriesList, GrocerieItem };
