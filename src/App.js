import React, { useState, useEffect } from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Popup from './Popup'
import Nav from './Nav'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [trigger, setTrigger] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState('')

  return (
    <div className="app">
      <Nav setSearchTerm={setSearchTerm} />
      <Banner />
      {searchTerm ? (
        <Row
          title="Your Search"
          fetchUrl={requests.search + searchTerm}
          trigger={trigger}
          setTrigger={setTrigger}
          setTrailerUrl={setTrailerUrl}
        />
      ) : (
        ''
      )}

      <Popup
        trigger={trigger}
        setTrigger={setTrigger}
        trailerUrl={trailerUrl}
      />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="ActionMovies"
        fetchUrl={requests.fetchActionMovies}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Documentaries "
        fetchUrl={requests.fetchDocumentariesMovies}
        trigger={trigger}
        setTrigger={setTrigger}
        setTrailerUrl={setTrailerUrl}
      />
    </div>
  )
}

export default App
