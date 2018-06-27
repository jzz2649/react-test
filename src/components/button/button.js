import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  static get defaultProps(){
    return {
      active: false,
      type: 'button',
      onClick: function(e){}
    }
  }
  render() {
    const { children, onClick, type, active } = this.props;
    const className = active ? 'btn active' : 'btn';
    return <button className={className} type={type} onClick={e => onClick(e)}>
        {children}
      </button>;
  }
}