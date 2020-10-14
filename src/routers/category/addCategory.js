const express = require('express');
const { Category } = require('../../models');
const { addCategorySchema } = require('../../schema');
const router = express.Router();

router.post('/category', async (req,res) => {
    
    try {
    const { error, value } = addCategorySchema.validate(req.body);
    if (error) {
        throw new Error (error.message);
    }
    const {
        namaCategory,
        deskripsi
    } = value;

    const user = new Category({
        namaCategory,
        deskripsi
    });

        await user.save();

        res.send({ namaCategory, deskripsi });

    }catch(e) { // tangkap error dan tampilkan dimana atau mengapa bisa terjadi error
        res.send({ message: e.message })
    }
    
});

module.exports = router;


