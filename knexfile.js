// Update with your config settings.
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/players.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: { // "test": "DB_ENV=testing jest --watch --verbose"
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
}
