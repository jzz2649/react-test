import React, { Component, Fragment } from "react";
import Header from "./Header";
import './Box.css';

export default class Box extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="box">{children}</div>
      </Fragment>
    );
  }
}
