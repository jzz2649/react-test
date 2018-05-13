import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render(){
        const { location: { pathname } } = this.props;
        return <header className="header">{pathname}</header>;
    }
}

export default withRouter(Header);