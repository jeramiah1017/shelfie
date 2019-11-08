import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <span>SHELFIE</span>
        <div>
          <Link to="/">
            <span>Dashboard</span>
          </Link>
          <Link to="add">
            <span>Add Inventory</span>
          </Link>
        </div>
      </div>
    );
  }
}
