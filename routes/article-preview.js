const express                  = require("express");
const articlePreviewRoutes     = express.Router();
const articlePreviewController = require("./../controllers/article-preview.controller")
const multer                   = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, './public/images')
    },
    filename: (req, file, callback) => {
        callback(null, (new Date).toISOString() + file.originalname)
    }
})

const upload = multer({storage});

articlePreviewRoutes.get("/", articlePreviewController.get)
articlePreviewRoutes.post("/", upload.any(),articlePreviewController.store)
articlePreviewRoutes.patch("/:id", articlePreviewController.update)
articlePreviewRoutes.get("/:id", articlePreviewController.show)
articlePreviewRoutes.delete("/:id", articlePreviewController.delete)

module.exports = articlePreviewRoutes