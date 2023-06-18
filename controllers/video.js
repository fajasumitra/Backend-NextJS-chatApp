const db = require('../models');
const Video = db.video;

//get all videos
exports.findAll = (req, res) => {
    Video.find()
    .then(videos => {
        res.send(videos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving videos.'
        });
    });
}

exports.findOne = (req, res) => {
    Video.findById(req.params.videoId)
    .then(video => {
        if(!video) {
            return res.status(404).send({
                message: "Video not found with id " + req.params.videoId
            });
        }
        res.send(video);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Video not found with id " + req.params.videoId
            });
        }
        return res.status(500).send({
            message: "Error retrieving video with id " + req.params.videoId
        });
    });
}

// Create and Save a new Video
exports.create = (req, res) => {
    // Validate request
    if(!req.body.link) {
        return res.status(400).send({
            message: "Video link can not be empty"
        });
    }

    // Create a Video
    const video = new Video({
        link: req.body.link,
        title: req.body.title || "Untitled Video",
        description: req.body.description
    });

    // Save Video in the database
    video.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the Video.'
        });
    });
}
