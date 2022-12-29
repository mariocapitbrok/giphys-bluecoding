import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const Thumb = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="" />
    </div>
  )
}

const SearchBar = () => {
  return <input type="text" />
}

const GifList = ({ gifs }) => {
  return (
    <>
      {gifs.map(g => (
        <Thumb key={g.title} src={g.src} />
      ))}
    </>
  )
}

function App() {
  const apiKey = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
  const gifs = [
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
  ]

  const [gifList, setGifList] = useState([])
  const [search, setSearch] = useState('goku')

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`
      )
      .then(response => setGifList(response.data))
  }, [])

  console.log(gifList)
  return (
    <>
      <SearchBar />
      <GifList gifs={gifs} />
    </>
  )
}

export default App
