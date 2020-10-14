const express = require('express');
const { Users } = require('../../models');
const { registerSchema } = require('../../schema');
const router = express.Router();

router.post('/user/register', async (req,res) => {
    
    try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
        throw new Error (error.message);
    }
    const {
        username,
        namaLengkap,
        email,
        password
    } = value;

    const user = new Users({
        username,
        email,
        namaLengkap,
        password
        });

        await user.save();

        res.send({ username, email, namaLengkap });

    }catch(e) { // tangkap error dan tampilkan dimana atau mengapa bisa terjadi error
        res.send({ message: e.message })
    }
    
});

module.exports = router;


