import { config } from './config';
import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
import Comments from '../model/comment.model';

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    dialectModule: mysql2,
})

const database = {
    sequelize,
    comments: Comments(sequelize),
}

module.exports = database
