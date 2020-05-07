import React, { Component } from 'react';
import Fullpage from './../fullpage/fullpage'
import './index.styl';

export default class Index extends Component {
  render () {
    return (
      <div className="container">
        <Fullpage></Fullpage>
      </div>
    )
  }
}
