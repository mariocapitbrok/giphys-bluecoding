const GifList = ({ gifs }) => (
  <>
    {gifs.map(g => {
      return <Thumb key={g.id} src={g.images.original.url} />
    })}
  </>
)

export default GifList
