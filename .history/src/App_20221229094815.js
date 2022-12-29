import './App.css'

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

const GifList = () => 'GifList'

function App() {
  return (
    <>
      <SearchBar />
      <GifList />
    </>
  )
}

export default App
