import React, { Component } from 'react';
import Button from './button';

export default class extends Component {
  render(){
    return <div><Button type="submit" onClick={e=>{
      console.log('click')
    }}>button</Button>
      <Button active>active</Button>
    </div>
  }
}
