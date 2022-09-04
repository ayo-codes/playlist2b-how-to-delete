"use strict";
const _ = require("lodash");

const playlistStore = {
  playlistCollectionJSON: require('./playlist-store.json').playlistCollectionJSON,

  getAllPlaylists(){
    return this.playlistCollectionJSON;
  },
  
  getPlaylist(pid) {
    return _.find(this.playlistCollectionJSON, { pid: pid });
  },

  removeSong(sid , songId){  //transfer both the songid and the new variable songId
    const playlist = this.getPlaylist(sid);
    _.remove(playlist.songs , { sid: songId});
  },

  removePlaylist(pid){
    _.remove(this.playlistCollectionJSON, {pid: pid});
  },
};

module.exports = playlistStore; // this exports the playlistStore const we have just created to be used by other parts of the app 