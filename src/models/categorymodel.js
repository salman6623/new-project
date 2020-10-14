const mongoose = require('mongoose');

const addCategorySchema = new mongoose.Schema({
    namaCategory: {
        type: String,
        require: true
    },
    deskripsi:{
        type:String,
        require: true    
    },

});
 
const Category = mongoose.model('Category', addCategorySchema);

module.exports = Category;