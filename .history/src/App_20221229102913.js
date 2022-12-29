import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const Thumb = ({ src }) => {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  )
}

const SearchBar = () => {
  return <input type="text" />
}

const GifList = ({ gifs }) => (
  <>
    {gifs.map(g => {
      console.log(g.images.original.url)
      return <Thumb key={g.id} src={g.images.original.url} />
    })}
  </>
)

function App() {
  const apiKey = ''''
  /* const gifs = [
    { title: 'title1', src: 'https://via.placeholder.com/150' },
    { title: 'title2', src: 'https://via.placeholder.com/150' },
    { title: 'title3', src: 'https://via.placeholder.com/150' },
    { title: 'title4', src: 'https://via.placeholder.com/150' },
    { title: 'title5', src: 'https://via.placeholder.com/150' },
    { title: 'title6', src: 'https://via.placeholder.com/150' },
    { title: 'title7', src: 'https://via.placeholder.com/150' },
    { title: 'title8', src: 'https://via.placeholder.com/150' },
    { title: 'title9', src: 'https://via.placeholder.com/150' },
    { title: 'title10', src: 'https://via.placeholder.com/150' },
  ] */

  const [gifList, setGifList] = useState([])
  const [search, setSearch] = useState('goku')

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`
      )
      .then(response => setGifList(response.data.data))
  }, [])

  return (
    <>
      <SearchBar />
      <GifList gifs={gifList} />
    </>
  )
}

export default App
