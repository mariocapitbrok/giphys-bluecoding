import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'

class Thumb extends Component {
  state = {}
  render() {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={src} alt="" />
      </Carousel.Item>
    )
  }
}

export default Thumb
