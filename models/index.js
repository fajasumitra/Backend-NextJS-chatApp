const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url : 'mongodb://127.0.0.1:27017/chatApp',
    video : require('./video')(mongoose),
    user : require('./user')(mongoose),
    message : require('./message')(mongoose),
    PDF : require("./pdf")(mongoose)
}
