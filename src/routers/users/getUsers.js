
const express = require('express'); // memanggil express

const { Users } = require('../../models');

const router = express.Router();

router.get('/users', async (req, res) =>{ //get users untuk menampilkan semua data yg ada di dalam database
    try {
        const data = await Users.find().select("-password"); // select dan tanda (-) berlaku untuk findOne, find disini untuk menghilangakan password yg di tampilkan bukan di data base // find mencari semuanya file category / mencari file yg ada di dalam data base
        res.send(data);
    }catch(e){
        res.send({message: e.message});
    }
});

module.exports = router;