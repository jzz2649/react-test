import React, { Component } from "react";
import Table from "./Table";
import Nav from "./Nav";

const columns = [
  {
    title: "index",
    dataIndex: "index"
  },
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const getData = page => {
  return Array.from(new Array(10)).map((d, i) => ({
    key: i,
    index: page*10+i,
    name: "jzz",
    age: 24,
    address: "上海"
  }));
}

export default class extends Component {
  state = {
    current: 1
  };
  change = nav => {
    const { current } = nav;
    this.setState({
      current
    });
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={getData(current-1)} />
        <Nav total={50} current={current} change={this.change} />
      </div>
    );
  }
}
