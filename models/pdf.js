const mongoose = require('mongoose');

module.exports = mongoose =>{
    const pdfSchema = new mongoose.Schema({
      name: String,
      path: String,
    });

    const PDF = mongoose.model("PDF", pdfSchema)
    return PDF
}
