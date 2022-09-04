"use strict";

const logger = require('../utils/logger');

const playlistStore = require('../models/playlist-store');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering"); //logs out information
    logger.error('some error has occurred'); // logs out errors
    logger.debug('some step has occurred...'); //logs out debugger
    
    const viewData = {
      title: 'Playlist Dashboard', //this sends to the {{title}} on the dashboard view
      playlists: playlistStore.getAllPlaylists(),  //  
    };
    logger.info('about to render',playlistStore.getAllPlaylists());
    response.render("dashboard", viewData);
  },

  deletePlaylist(request , response) {
    const playlistId = request.params.pid;
    logger.debug("Deleting Playlist ${playlistID}");
    playlistStore.removePlaylist(playlistId);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
