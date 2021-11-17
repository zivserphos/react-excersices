import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <FontAwesomeIcon className="basketIcon" icon={faShoppingBasket} />
        <div id="hello">Hello, Basket!</div>
      </header>
    );
  }
}

export default Header;
