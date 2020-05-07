import React, { Component } from 'react'
import './fullpage.styl'

export default class Fullpage extends Component {
  constructor() {
    super()
    this.state = {
      active: 0,
      innerHeight: 0,
    }
  }
  scrollPage(h) {
    let index = 0, height = 0
    setInterval(_ => {
      index++
      if (index >= 4) index = 0
      height = index * h
      this.setState({
        active: index,
        innerHeight: -height
      })
    },5e3)
  }
  componentDidMount() {
    this.scrollPage(window.innerHeight)
  }
  render() {
    let { active, innerHeight } = this.state
    return (
      <div className="fullpage" style={{transform: `translateY(${innerHeight}px)`}}>
        <div className={`fullpage__item ${active === 0 ? 'active' : ''}`}>1</div>
        <div className={`fullpage__item ${active === 1 ? 'active' : ''}`}>2</div>
        <div className={`fullpage__item ${active === 2 ? 'active' : ''}`}>3</div>
        <div className={`fullpage__item ${active === 3 ? 'active' : ''}`}>4</div>
      </div>
    )
  }
}
