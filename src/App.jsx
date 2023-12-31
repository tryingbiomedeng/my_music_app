import React, { useState } from 'react';
import AlbumItem from './components/AlbumItem/index';
import LikedSongs from './components/LikedSongs/index';

function App() {
  const [likedSongs, setLikedSongs] = useState([])

  const handleLike = (song) => {
    if (likedSongs.includes(song)) {
      setLikedSongs(likedSongs.filter((s) => s !== song))
    } else {
      setLikedSongs([...likedSongs, song])
    }
  }

  const albums = [
    {
      title: 'Suzume',
      cover: 'Suzume.jpeg',
      releaseDate: '2022',
      songs: ['Suzume', 'Kanata Haluka', 'Tamaki'],
    },
    {
      title: 'Forever Daze',
      cover : 'ForeverDaze.jpeg',
      releaseDate: '2021',
      songs: ['Tokyo', 'Kaiba', 'Shiwkucha'],
    },
    {
      title: 'Weathering with you',
      cover : 'WeatheringWithYou.jpeg',
      releaseDate: '2019',
      songs: ['Grand Escape', 'Is There Still Anything That Love Can Do?', "We'll be alright"],
    },
  ]

  return (
    <div className="App">
      <h1>Radwimps</h1>
      <h3>
        <img src="/radwimps.jpeg" alt="Radwimps band image"/>
        <p>
          Radwimps is a Japanese rock band formed in 2001. Their music combines elements of pop, alternative rock, and emo. They are known for their unique blend of rock and emotional lyrics. They are also popular for writing the songs and music for Makoto Shinkai's animation movies.
        </p>
      </h3>

      <h2>Albums</h2>
      <div className="albums">
        {albums.map((album, index) => (
          <AlbumItem
            key={index}
            album={album}
            likedSongs={likedSongs}
            handleLike={handleLike}
          />
        ))}
      </div>
      <LikedSongs likedSongs={likedSongs} />
      <h2>Write the band a message!</h2>
      <form>
        <input type="text" placeholder="Name" />
        <textarea placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
