import { config } from './config';
import { Sequelize } from 'sequelize';
import { Comment } from '../model/comment'

// TODO: Pozbyć się tego mysql2

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    dialectModule: require('mysql2'),
})

sequelize.define('comments', Comment)

module.exports = {
    sequelize,
}
