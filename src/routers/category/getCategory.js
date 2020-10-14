const express = require('express'); // memanggil express
const { Category } = require('../../models');

const router = express.Router();


router.get('/category', async (req, res) =>{
    try {
        const result = await Category.find(); // find mencari semuanya file category / mencari file yg ada di dalam data base
        res.send(result);
    }catch(e){
        res.send({message: e.message});
    }
});

module.exports = router;