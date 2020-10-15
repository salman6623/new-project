const express = require('express');

const { News } = require('../../models');

const router = express.Router();

router.get('/news',async(req, res) => {
    try {
        const kumpulan = await News.find({});
        res.send(kumpulan);
    }catch(e) {
        res.send({message: e.message});
    }
});

module.exports = router;