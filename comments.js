// Create web server 
// 1. Import the express module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/comments', commentController.getComments);
router.get('/comments/:id', commentController.getComment);
router.post('/comments', commentController.createComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;