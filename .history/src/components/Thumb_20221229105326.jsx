import Carousel from 'react-bootstrap/Carousel'

const Thumb = ({ src }) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={src} alt="" />
    </Carousel.Item>
  )
}

export default Thumb
