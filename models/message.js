const mongoose = require('mongoose');

module.exports = mongoose => {
    const messageSchema = new mongoose.Schema({
        room : {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
    );

    const Message = mongoose.model('Message', messageSchema);
    return Message;
}
    