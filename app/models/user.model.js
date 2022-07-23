const  { Model, DataTypes }  = require('sequelize');

const sequelize = require('../../db/connect');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    },
},
{
    sequelize,
    modelName: 'user'
})

module.exports = User;