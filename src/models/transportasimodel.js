const { string } = require('joi');
const mongoose = require('mongoose');

const transportasiSchema = new mongoose.Schema({
    namaTransportasi:{
       type: String,
       required: true
   },
   jenisTrasnportasi: {
       type: String,
       required: true
   },
   kegunaaan: {
    type: String,
    required: true
   },

});

const Transportasi = mongoose.model('Transportasi', transportasiSchema);

module.exports = Transportasi;