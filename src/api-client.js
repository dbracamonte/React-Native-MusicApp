const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=1f4dfebd27732f63a72a2f39f80e634f&format=json'

function getTopArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 240,
        comments: 120
      }
    }))
}

export { getTopArtists }
