export default class Song {

    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Song() {
        return `<div class="card" style="width: 22rem; height: 35rem">
  <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">Artist: ${this.artist} <br>
    Collection: ${this.collection} <br>
    Price: ${this.price}</p>
    <audio
        controls
        src="${this.preview}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    <a href="#" class="btn btn-secondary text-center">Buy on iTunes</a>
  </div>
</div>`
    }
}