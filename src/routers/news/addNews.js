const express = require('express');
const mongoose = require('mongoose'); // disini kita buat moongose karena nanti dibawahnya kita mengunakan liblary dari dari mongoose
const { News, Users, Category } = require('../../models'); // disitu ada 3 biji yg dimana di script ini kita memanggil id yg dari users dan id yg dari category 
const { addNewsSchema } = require('../../schema');
const router = express.Router();

router.post('/news', async(req, res) => {
    try{
        const { error, value } = addNewsSchema.validate(req.body);
        const { judul, content, author, category } = value;
        if (error) {
            throw new  Error (error.message);
        }
        const user = await Users.findOne({ _id: mongoose.Types.ObjectId(author)}); // untuk mencetak id users dengan melakukan pencarin menggunakan types.ObjectId
        if (!user) {
            throw new Error('Author tidak valid coy');
        }
        const categoray =  await Category.findOne({ _id: mongoose.Types.ObjectId(category)});
        if (!categoray) {
            throw new Error('Category tidak valid coy')
        }
        const news = new News({
            judul,
            content,
            author,
            category
        });
        
        await news.save();
        res.send({judul, content, author, category });
    }catch(e) {
        res.send({message: e.message});
    }
});


module.exports = router;