const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlenght: 4,
        maxlength: 12
    },
    namaLengkap: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true // gak boleh kosong
    },
    email: {
        type: String,
        minlength:6,
        maxlength: 30,
        unique: true,
        required: true
    },

    password: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true
    }

});

const Users = mongoose.model('User', userSchema);

module.exports = Users;