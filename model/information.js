const Sequelize = require('sequelize');
const db = require('../configuration/config');

const Information = db.define(
    'information',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            AllowNull: false,
            autoIncrement: true
        },
        description: {
            type: Sequelize.STRING,
            AllowNull: false
        }
    },
    {
        tableName: 'information',
        timestamps:false
    }
);

module.exports = Information;
