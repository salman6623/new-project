const express = require('express');
const mongoose = require('mongoose');

const { host, port } = require('../../config');

const dbConnect = require('../connection/dbConnect');
const router = require('../routers');


const app = express(); //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect(mongoose);
router(app); 

// app.get('/', (req,res) => { //endpoint
//     res.send('Halo ini web kedua saya'); // isi pertama halaman web maka akan menampilkan yg ada di dalam res.send
// })


app.listen(port, () => console.log(`server running at http://${host}:${port}`));
