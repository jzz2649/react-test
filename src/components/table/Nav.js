import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  change = current => {
    const { total, change } = this.props;
    if (current < 1 || current > total) return;
    change({ total, current });
  };
  render() {
    const { total, current } = this.props;
    const getDisabled = t => {
      if (t) {
        return "nav-item nav-disabled";
      }
      return "nav-item";
    };
    return (
      <div className="nav">
        <ul>
          <li
            className={getDisabled(current <= 1)}
            onClick={() => this.change(current - 1)}
          >
            <a>&lt;</a>
          </li>
          {Array.from(new Array(total)).map((d, i) => {
            const page = i + 1;
            return <li key={page} className={current === page ? "nav-item nav-item-active" : "nav-item"} onClick={() => this.change(page)}>
                <a>{page}</a>
              </li>;
          })}
          <li
            className={getDisabled(current >= total)}
            onClick={() => this.change(current + 1)}
          >
            <a>&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}
