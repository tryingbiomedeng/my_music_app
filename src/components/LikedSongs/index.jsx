import React from 'react'

function LikedSongs({ likedSongs }) {
  return (
    <>
      <h2>Liked Songs</h2>
      <ul>
        {likedSongs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </>
  )
}

export default LikedSongs;