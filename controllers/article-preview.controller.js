
const ArticlePreview = require("./../models/ArticlePreview")

const ArticlePreviewController = {

    async get(req, res){
        const articlePreview = await ArticlePreview.find()
        res.send(articlePreview)
    },

    async store(req, res){    

        const values = {
                    title: req.body.title,
                    preview_content: req.body.preview_content,
                    autor: req.body.autor,
                    date: req.body.date,
                    image: req.files.filter(image => image.fieldname == "image")[0].filename,
                    autor_photo: req.files.filter(image => image.fieldname == "autor_photo")[0].filename,
                }

        const newArticlePreview = new ArticlePreview(values);
        const created = await newArticlePreview.save();

        res.status(201);
        res.json({message: "Created Sucefully", response: created});
        
    },

    async show(req, res){ 

        const data = await ArticlePreview.findById(req.params.id);
        res.json(data);

    },

    async update(req, res){

        const articlePreviewUpdated = await ArticlePreview.updateOne({_id: req.params.id}, req.body);
        
        res.json(articlePreviewUpdated);
    },

    async delete(req, res){
        const articleDeleted = await ArticlePreview.deleteOne({_id: req.params.id})
        res.json(articleDeleted);
    }

}

module.exports = ArticlePreviewController;