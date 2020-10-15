const express = require('express');

const { News, Users, Category } = require('../../models');

const router = express.Router();

const getData = async (id, model) => {
    const result = await model.findById(id).select('-password'); // 
    return result;
}
router.get('/news',async(req, res) => { 
    try {
        const result = await News.find({}); // disini await nya berfungsi untuk disuruh menunggu data seluruh news baru di tampilkan jika seluruh data news sudah muncul
        const promises = await Promise.all(result.map(async el =>{ // map sama seperrti foreach tetapi bisa memanipulasi data dan 
            return {
                judul: el.judul,
                content: el.content,
                author: await getData(el.author, Users),
                category: await getData(el.category, Category)
            }
        }));
        res.send(promises);
    }catch(e) {
        res.send({message: e.message});
    }
});

module.exports = router;

//query dan parameter dan promise