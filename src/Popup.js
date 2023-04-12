import React from 'react'
import YouTube from 'react-youtube'
import './popup.css'

function Popup({ trigger, setTrigger, trailerUrl }) {
  const opts = {
    height: '790',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
