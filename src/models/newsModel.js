const mongoose = require('mongoose');

const newsModelSchema = new mongoose.Schema({
    judul: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    },
    content: {
        type: String,
        require: true,
        minlength: 5,
    },
    author:  String,
    category: String
});

const News = mongoose.model('News', newsModelSchema);

module.exports = News;