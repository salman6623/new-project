const Joi = require('joi'); // memanggil Joi

const transportasiSchema = Joi.object({ //Joinya harus berupa object
    namaTransportasi:Joi.string() //nulisnya harus diakhiri dengan tanda titik :
    .min(2)
    .max(20)
    .require(),
    jenisTransportasi: Joi.string()
    .min(1)
    .max(20)
    .require()

});

module.exports = transportasiSchema;