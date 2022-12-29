import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

function App() {
  const apiKey = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
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
  }, [search])

  const handleSearchChange = e => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <>
      <SearchBar value={search} onChange={handleSearchChange} />
      <GifList gifs={gifList} />
    </>
  )
}

export default App
