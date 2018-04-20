// this exercise was implemented using maker functions that call Object.create(protoXYZ); I could alternatively have defined the constructor functions and then
// added prototype methods to XYZ.prototype.method = function()...

const protoLibrary = {

  addPlaylist(playlist){
    this.playlists.push(playlist);
  },

  listPlaylists(){
    console.log(`Playlists in ${this.name}:`);

    this.playlists.forEach((playlist, index) => {
      const playTime = playlist.totalDuration();
      const seconds = playTime % 60;
      console.log(`${index + 1}. ${playlist.name} - ${Math.floor(playTime / 60)}:${seconds < 10 ? "0" + seconds : seconds} - Rated ${playlist.overallRating()} / 5`)
    });
  }
};

function makeLibrary(name, creator){
  const library = Object.create(protoLibrary);
  library.name = name;
  library.creator = creator;
  library.playlists = [];

  return library;
}

const protoPlaylist = {

  addTrack(track){
    this.tracks.push(track);
  },

  overallRating(){
    let totalRating = 0;
    this.tracks.forEach(track => {
      totalRating += track.rating;
    });
    return Math.round( totalRating * 10 / this.tracks.length ) / 10;
  },

  totalDuration(){
    let totalLength = 0;
    this.tracks.forEach(track => {
      totalLength += track.length;
    });
    return totalLength
  },

  listTracks(){
    console.log(`Tracks in ${this.name}:`);

    this.tracks.forEach((track, index) => {
      seconds = track.length % 60;
      console.log(`${index + 1}. ${track.name} - ${Math.floor(track.length / 60)}:${seconds < 10 ? "0" + seconds : seconds} - Rated ${track.rating} / 5`)
    });
  }
};

function makePlaylist(name){
  const playlist = Object.create(protoPlaylist);
  playlist.name = name;
  playlist.tracks = [];
  return playlist;
}

function makeTrack(name, rating, length){
  const track = {};
  track.name = name;
  track.rating = rating;
  track.length = length;
  return track;
}

const firstLibrary = makeLibrary("Andrew's Music", "Andrew");
const songs = makePlaylist("Random Songs");
const track1 = makeTrack("Stairway to Heaven", 3, 465);
const track2 = makeTrack("Amerika", 4, 265);
const track3 = makeTrack("Uptown Funk", 3, 355);

const elton = makePlaylist("Elton John");
const track4 = makeTrack("Still Standing", 4, 267);
const track5 = makeTrack("Rocket Man", 3, 433);
const track6 = makeTrack("Tiny Dancer", 4, 333);

firstLibrary.addPlaylist(songs);
firstLibrary.addPlaylist(elton);

songs.addTrack(track1);
songs.addTrack(track2);
songs.addTrack(track3);

elton.addTrack(track4);
elton.addTrack(track5);
elton.addTrack(track6);


firstLibrary.listPlaylists();
songs.listTracks();
elton.listTracks();
