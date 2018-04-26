import React, { Component, Fragment } from 'react';
import Menu from './Menu';
import Content from './Content';

export default class Body extends Component {
    render(){
        return <Fragment>
            <Menu />
            <Content />
        </Fragment>
    }
}