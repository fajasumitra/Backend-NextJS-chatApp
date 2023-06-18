const db = require('../models');
const Message = db.message;

//get all messages
exports.findAll = (req, res) => {
    Message.find()
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving messages.'
        });
    });
}

exports.findByRoomId = (req, res) => {
    Message.find({room: req.params.roomId})
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving messages.'
        });
    });
}