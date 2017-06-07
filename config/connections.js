module.exports.connections = {
  postgres: {
    adapter: 'sails-postgresql',
    database: 'web',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    poolSize: 10,
    ssl: false
  }
};