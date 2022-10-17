import dotenv from 'dotenv';
// TODO: Ogarnąć ten dotenv
dotenv.config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
    },
}

module.exports = {
    config
}
