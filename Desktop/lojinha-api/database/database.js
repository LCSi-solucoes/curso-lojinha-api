const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'helpdesck',
    'helpdesck',
    'Abacate123',
    {
        host: 'pgsql01-farm2.uni5.net',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

module.exports = sequelize;