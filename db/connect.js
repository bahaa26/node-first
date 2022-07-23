const dbConfig = require('./database.config');

// Sequelize

const{ Sequelize} = require('Sequelize');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig. PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

module.exports = sequelize;

