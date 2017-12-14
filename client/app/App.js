import React, { Component } from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      word: 'ASDFASEFASDF'
    };
  }

  componentWillMount() {
    axios.get('/api').then( res => {
      this.setState({
        word: res.data.hello
      })
    });
  }

  render() {
    return (
      <p>WE KNOW THEY DO {this.state.word}</p>
    )
  }
}
