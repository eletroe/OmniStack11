const knex = require('knex');
const configutaion = require('../../knexfile');

const connection = knex(configutaion.development);

module.exports = connection;
