import { DataTypes } from "sequelize";
import { COMMENTS_TABLE_NAME } from '../utils/constants'

module.exports = (sequelize) => {
    const Comments = sequelize.define(COMMENTS_TABLE_NAME, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        updatedAt: false,
    })

    return Comments;
}