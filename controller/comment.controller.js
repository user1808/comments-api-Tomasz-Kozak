import { comments } from '../db/sequelize';

exports.findAll = (req, res) => {
    comments.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Error occurred while fetching all comments' }))
}

exports.create = (req, res) => {
    if (typeof req.body.message !== 'string') {
        res.status(400).send({ message: 'Comment must be a text' });
        return;
    }

    if (typeof req.body.author !== 'string') {
        res.status(400).send({ message: 'Author name must be a string' });
        return;
    }

    const newComment = {
        message: req.body.message,
        author: req.body.author,
        createdAt: req.body.createdAt || new Date(),
    }

    comments.create(newComment)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Error occurred while creating new comment' }))
}