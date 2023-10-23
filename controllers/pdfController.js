const db = require('../models');
const PDF = db.PDF
const fs = require('fs');

// Handle PDF upload
exports.uploadPDF = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No PDF file uploaded.');
      }
  
      const { originalname, path } = req.file;
      const newPDF = new PDF({ name: originalname, path: path });
  
      await newPDF.save();
      res.status(201).send('PDF uploaded successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error uploading PDF.');
    }
  };
  
  // Handle PDF retrieval by ID
  exports.getPDF = async (req, res) => {
    try {
      const pdf = await PDF.findById(req.params.id);
  
      if (!pdf) {
        return res.status(404).send('PDF not found.');
      }
  
      res.setHeader('Content-Type', 'application/pdf');
      const readStream = fs.createReadStream(pdf.path);
      readStream.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving PDF.');
    }
  };