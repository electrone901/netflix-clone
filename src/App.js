import React, { useState, useEffect } from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="app">
      <Nav setSearchTerm={setSearchTerm} />
      <Banner />
      {searchTerm ? (
        <Row title="Your Search" fetchUrl={requests.search + searchTerm} />
      ) : (
        ''
      )}

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries "
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  )
}

export default App
