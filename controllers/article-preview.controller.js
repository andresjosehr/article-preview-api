
const ArticlePreview = require("./../models/ArticlePreview")

const ArticlePreviewController = {

    async get(req, res){
        const articlePreview = await ArticlePreview.find()
        res.send(articlePreview)
    },

    async store(req, res){    

        const data = req.body

        const newArticlePreview = new ArticlePreview({
            title: data.title,
            preview_content: data.preview_content,
            autor: data.autor,
            date: data.date
        });
        const created = await newArticlePreview.save();

        res.status(201);
        res.json({message: "Created Sucefully"})
        
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