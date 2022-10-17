import express from 'express';
import comments from '../controller/comment.controller';

const router = express.Router();

router.get('/', (req, res) => comments.findAll(req, res));

router.post('/', (req, res) => comments.create(req, res));

module.exports = router;
