import Carousel from 'react-bootstrap/Carousel'

const Thumb = ({ src }) => {
  return (
    <Carousel.Item>
      <img src={src} alt="" />
    </Carousel.Item>
  )
}

export default Thumb
