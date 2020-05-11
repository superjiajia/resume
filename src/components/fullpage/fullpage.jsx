import React, { Component } from 'react'

import './fullpage.styl'

// import { debounce } from 'common/js/utils.js'

export default class Fullpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      innerHeight: 0,
    }
    this.activeIndex = 0
    this.iHeight = window.innerHeight
    this.scrollPage = this.scrollPage.bind(this)
  }
  scrollPage(e) {
    if (e.deltaY > 0) { // Down
      this.activeIndex++
      if (this.activeIndex > 3) this.activeIndex = 0
    } else { // Up
      this.activeIndex--
      if (this.activeIndex < 0) this.activeIndex = 3
    }
    this.setState({
      active: this.activeIndex,
      innerHeight: -this.activeIndex * this.iHeight
    })
  }
  render() {
    let { active, innerHeight } = this.state
    return (
      <div className="fullpage" style={{transform: `translateY(${innerHeight}px)`}} onWheel={this.scrollPage}>
        <div className={`fullpage__item ${active === 0 ? 'active' : ''}`}>1</div>
        <div className={`fullpage__item ${active === 1 ? 'active' : ''}`}>2</div>
        <div className={`fullpage__item ${active === 2 ? 'active' : ''}`}>3</div>
        <div className={`fullpage__item ${active === 3 ? 'active' : ''}`}>4</div>
      </div>
    )
  }
}
