import React from 'react'

function AlbumItem({ album, likedSongs, handleLike }) {
  return (
    <div className="album">
      <img src={`/${album.cover}`} alt={album.title} />
      <div>
        <p>Album name: {album.title}</p>
        <p>Released: {album.releaseDate}</p>
      </div>
      <p>Songs:</p>
      {album.songs.map((song, songIndex) => (
        <div key={songIndex}>
          {song}{' '}
          <button onClick={() => handleLike(song)}>
            {likedSongs.includes(song) ? 'Unlike' : 'Like'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default AlbumItem;