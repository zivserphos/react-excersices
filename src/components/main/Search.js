import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./main.scss";

class Search extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="search">
        Search
        <input placeholder="Search for groceries" id="searchBar" />
      </div>
    );
  }
}

export default Search;
