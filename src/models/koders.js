const mongoose = require("mongoose");

//Se genera el esquema, nos muestra como se acomodan la información (en objetos)
const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    min: 15,
    max: 100,
    required: true,
  },
});

//Modelo representado con una constante que inicia con mayuscula
const model = mongoose.model("koders", schema);

//Exportando un valor
module.exports = model;
