import express from 'express';
import Comment from '../db/Comment';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(Comment.findAll(req, res));
});

router.post('/', (req, res) => {
    res.send(Comment.create({message: 'Wiadomość', author: 'Autor'}));
});

module.exports = router;
