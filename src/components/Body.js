import React, { Component } from 'react';
import Sider from './Sider';
import Content from './Content';
import './Body.css';

export default class Body extends Component {
    render(){
        return <div className="Body">
            <Sider />
            <Content />
        </div>
    }
}