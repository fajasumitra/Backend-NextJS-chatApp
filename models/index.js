const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url : 'mongodb://localhost:27017/chatApp',
    video : require('./video')(mongoose),
    user : require('./user')(mongoose),
    message : require('./message')(mongoose)
}
