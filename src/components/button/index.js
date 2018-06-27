import React, { Component } from 'react';
import Button from './button';

export default class extends Component {
  state = {
    value: 0
  }
  render(){
    console.log(this.state.value);
    return <div><Button type="submit" onClick={e=>{
      this.setState({
        value: 0
      })
    }}>123</Button>
      <Button active>active</Button>
    </div>
  }
}
