"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const playlist = require("./controllers/playlist.js");

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);
router.get("/playlist/:pid", playlist.index);
router.get("/playlist/:pid/deletesong/:songid",playlist.deleteSong);
router.get("/dashboard/deleteplaylist/:pid", dashboard.deletePlaylist);
module.exports = router;
