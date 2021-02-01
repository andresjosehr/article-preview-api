const express = require("express");
const apiRoutes = express.Router();
const articlePreviewRoutes = require("./article-preview");

apiRoutes.use("/article-preview", articlePreviewRoutes)

module.exports = apiRoutes;