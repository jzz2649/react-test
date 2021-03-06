import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Box from './common/Box';
import Home from "./Home";
import Table from "./table";
import Button from "./button";
import NoMatch from "./NoMatch";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Box>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/base/table" component={Table} />
            <Route exact path="/base/button" component={Button} />
          <Route component={NoMatch} />
        </Switch>
        </Box>
      </div>
    );
  }
}
