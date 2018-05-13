import React, { Component } from "react";
import { getV } from "../../utils/filter";
import "./Table.css";

export default class Table extends Component {
  render() {
    const { columns, dataSource } = this.props;
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              {columns.map((d, i) => <th key={d.dataIndex}>{d.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data, i) => {
              const gv = getV(data);
              return (
                <tr key={data.key}>
                  {columns.map((d, i) => {
                    const { render, dataIndex } = d;
                    const args = dataIndex.split('.');
                    const text = gv(...args);
                    const show = render ? render(text, data, i) : text;
                    return <td key={d.dataIndex}>{show}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
