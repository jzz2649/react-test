import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Menu.css";

import { list } from './list';

const Loop = props => {
  const { list, left, go } = props;
  const offsetLeft = left || 0;
  const paddingLeft = offsetLeft*24 + 10;
  return list.map(li => {
    const { key, value, children, link } = li;
    if (children) {
      return <div key={key} className="menu-list">
        <div key={key} style={{ paddingLeft }} className="menu-title menu-hidden" onClick={e => {
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
            <Loop list={children} left={offsetLeft+1} go={go} />
          </div>
        </div>;
    }
    return <div key={key} style={{paddingLeft}} className="menu-item" onClick={()=>{
        console.log('router %s', link);
        go(link);
    }}>
        {value}
      </div>;
  });
};

class Menu extends Component {
  go = (url) => {
    const { history: { push } } = this.props;
    push(url);
  }
  render() {
    return (
      <div className="Menu">
        <Loop list={list} go={this.go} />
      </div>
    );
  }
}

export default withRouter(Menu);