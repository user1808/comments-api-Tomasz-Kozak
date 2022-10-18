import { comments } from '../db/sequelize';
import { isValidISODateString } from 'iso-datestring-validator';

exports.findAll = (req, res) => {
    comments.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Error occurred while fetching all comments' }))
}

exports.create = (req, res) => {
    if (typeof req.body.message !== 'string' || req.body.message.length === 0) {
        res.status(400).send({ message: 'Comment is required and must be a text' });
        return;
    }

    if (typeof req.body.author !== 'string' || req.body.author.length === 0) {
        res.status(400).send({ message: 'Author name is required and must be a string' });
        return;
    }

    if (req.body.createdAt && (typeof req.body.createdAt !== 'string' || !isValidISODateString(req.body.createdAt))) {
        res.status(400).send({ message: 'Created At date format is not valid (must be ISO 8601)' });
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