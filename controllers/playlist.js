"use strict";

const logger = require('../utils/logger');

const playlistStore = require('../models/playlist-store');

const playlist = {
  index(request, response) {
    const playlistId = request.params.pid;
    logger.debug('Playlist id =', playlistId)
    const viewData = {
      title: 'Playlist',
      playlist: playlistStore.getPlaylist(playlistId)
    };
  response.render('playlist',viewData);
},
  deleteSong(request,response){
    const playlistId = request.params.pid;
    const songId = request.params.songid;
    logger.debug('Deleting Song ${songId} from Playlist ${playlistId}');
    playlistStore.removeSong(playlistId, songId);
    response.redirect('/playlist/' + playlistId);
  }
};

module.exports = playlist;