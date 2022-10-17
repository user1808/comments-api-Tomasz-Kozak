import { DataTypes } from "sequelize";

const Comment = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.TEXT
    },
    author: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE
    }
}

module.exports = {
    Comment,
}