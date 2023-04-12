import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow, setTrigger, setTrailerUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const getTrailer = async (movie) => {
    try {
      const url = await movieTrailer(
        movie?.name || movie?.title || movie?.original_title || '',
      )
      const urlParams = new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get('v'))
      setTrigger(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => getTrailer(movie)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))
        ) : (
          <h1>Not movies found =( </h1>
        )}
      </div>
    </div>
  )
}

export default Row
