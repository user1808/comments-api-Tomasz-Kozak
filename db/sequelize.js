import { config } from './config';
import { Sequelize } from 'sequelize';
import { Comment } from '../model/comment'
import { COMMENTS_TABLE_NAME } from '../utils/constants';

// TODO: Pozbyć się tego mysql2

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
})

sequelize.define(COMMENTS_TABLE_NAME, Comment)

module.exports = {
    sequelize,
}
