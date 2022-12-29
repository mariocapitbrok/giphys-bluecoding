import Carousel from 'react-bootstrap/Carousel'

const Thumb = ({ src }) => {
  return (
    <Carousel.Item>
      <div>
        <img src={src} alt="" />
      </div>
    </Carousel.Item>
  )
}

export default Thumb
