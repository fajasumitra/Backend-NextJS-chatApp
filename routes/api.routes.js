module.exports = app => {
    const video = require('../controllers/video');
    // const user = require('../controllers/user');
    const message = require('../controllers/message');
    const pdfController = require('../controllers/pdfController');
    const router = require('express').Router();
    const upload = require('../middleware/mutler')

    // video
    router.post('/videos', video.create);
    router.get('/videos', video.findAll);
    router.get('/videos/:videoId', video.findOne);

    // user
    // router.post('/login', user.login);
    // router.post('/register', user.register);

    //message
    router.get('/messages', message.findAll);
    router.get('/messages/:roomId', message.findByRoomId);

    //pdf
    router.post('/upload', upload.single('pdf'), pdfController.uploadPDF);
    router.get('/:id', pdfController.getPDF);

    app.use('/api/', router); 
}