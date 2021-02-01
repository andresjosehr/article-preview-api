const { Schema, model } = require("mongoose");

const articlePreviewSchema= new Schema({
    title: String,
    preview_content: String,
    image: String,
    autor: String,
    autor_photo: String,
    date: String
})

module.exports = model("article_preview", articlePreviewSchema)