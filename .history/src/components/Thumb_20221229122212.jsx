import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'

class Thumb extends Component {
  state = {}
  render() {
    return (
      <Carousel.Item>
        <img className="d-block img-fluid w-100" src={this.props.src} alt="" />
      </Carousel.Item>
    )
  }
}

export default Thumb
