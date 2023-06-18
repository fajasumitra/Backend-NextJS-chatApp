const { Schema } = require('mongoose');

module.exports = mongoose => {
    const videoSchema = new mongoose.Schema({
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Untitled Video'
        },
        description: {
            type: String
        }
    }, {
        timestamps: true
    }
    );

    const Video = mongoose.model('Video', videoSchema);
    return Video;
};
