const express = require("express");
const articlePreviewRoutes = express.Router();
const articlePreviewController = require("./../controllers/article-preview.controller")

articlePreviewRoutes.get("/", articlePreviewController.get)
articlePreviewRoutes.post("/", articlePreviewController.store)
articlePreviewRoutes.patch("/:id", articlePreviewController.update)
articlePreviewRoutes.get("/:id", articlePreviewController.show)
articlePreviewRoutes.delete("/:id", articlePreviewController.delete)

module.exports = articlePreviewRoutes