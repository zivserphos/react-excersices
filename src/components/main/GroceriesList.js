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
              func={this.props.add}
              mathSign="+"
              key={index}
              item={item}
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
    this.state = {};
  }
  render() {
    return (
      <li className="list-group-item">
        <Button
          func={this.props.func}
          mathSign={this.props.mathSign}
          item={this.props.item}
        />
        {/* <button
          className="button"
          onClick={() => this.props.add(this.props.item)}
        >
          {this.state.addOrRemoveOne ? "-" : "+"}
        </button> */}
        {this.props.quantity ? ` ${this.props.quantity}` : ""}
        {` ${this.props.item}`}
      </li>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <button onClick={() => this.props.func(this.props.item)}>
        {this.props.mathSign}
      </button>
    );
  }
}

export { GroceriesList, GrocerieItem };
