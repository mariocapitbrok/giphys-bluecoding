import Thumb from './Thumb'

const GifList = ({ gifs }) => (
  <>
    <Carousel variant="dark">
      {gifs.map(g => {
        return <Thumb key={g.id} src={g.images.original.url} />
      })}
    </Carousel>
  </>
)

export default GifList
