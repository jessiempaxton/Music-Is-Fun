import ItunesService from "./itunes-service.js";
//Private
let _itunesService = new ItunesService()

function _drawSongs() {
  let songs = _itunesService.Songs
  let template = ''
  songs.forEach(s => {
    template += `
    <div class="col-4">
                <div id="songs">
                    <ul id="song-list">
                        <li>${s.Song}</li>
                    </ul>
                </div>
            </div>
    `
  })
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  document.querySelector('#songDrop').innerHTML = template


}


//PUBLIC
class ItunesController {
  constructor() {
    _itunesService.addSubscriber('songs', _drawSongs)
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController