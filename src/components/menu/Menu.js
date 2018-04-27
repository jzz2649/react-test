import React, { Component } from "react";
import "./Menu.css";

import { list } from './list';

const Loop = props => {
  const { list } = props;
  return list.map(li => {
    const { key, value, children, link } = li;
    if (children) {
      return <div key={key} className="menu-list">
          <div key={key} className="menu-title menu-hidden" onClick={e => {
              const me = e.target;
              const $next = me.nextElementSibling;
              if ($next) {
                if (me.classList.contains("menu-hidden")) {
                  me.classList.remove("menu-hidden");
                  $next.style.display = "block";
                } else {
                  me.classList.add("menu-hidden");
                  $next.style.display = "none";
                }
              }
            }}>
            {value}
          </div>
          <div className="menu-child">
            <Loop list={children} />
          </div>
        </div>;
    }
    return <div key={key} className="menu-item" onClick={()=>{
        console.log('router %s', link);
    }}>
        {value}
      </div>;
  });
};

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Loop list={list} />
      </div>
    );
  }
}
