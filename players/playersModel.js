const db = require('../data/db-config');

module.exports = {
  add,
  update,
  remove,
  getAll,
};

async function add(player) {
  const [id] = await db('players').insert(player)
  return db('players').where({ id }).first()
}

async function update(id, changes) {
  await db('players').update(changes).where({ id });
  return db('players').where({ id }).first()
}

function remove(id) {
  return db('players').where({ id }).delete();
}

function getAll() {
  return db('players');
}