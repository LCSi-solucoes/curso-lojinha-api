const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'lojinha',
    'postgress',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

modedule.exports = sequelize;