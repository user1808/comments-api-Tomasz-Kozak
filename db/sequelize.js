import { config } from './config';
import { Sequelize } from 'sequelize';
import { Comment } from '../model/comment'
import { COMMENTS_TABLE_NAME } from '../utils/constants';
import mysql2 from 'mysql2';

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    dialectModule: mysql2,
})

sequelize.define(COMMENTS_TABLE_NAME, Comment, {
    updatedAt: false,
})

module.exports = {
    sequelize,
}
