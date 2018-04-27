import React, { Component } from "react";
import Menu from "./menu/Menu";
import "./Sider.css";

export default class Sider extends Component {
  render() {
    return (
      <div className="Sider">
        <Menu />
      </div>
    );
  }
}
