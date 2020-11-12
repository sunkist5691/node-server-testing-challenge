const Players = require('./playersModel')
const db = require('../data/db-config')

beforeEach(async () => {
   await db('players').truncate()
})

describe('players model', () => {
   describe('getAll', () => {
      it('gets an empty array', async () => {
         const players = await Players.getAll()
         expect(players).toHaveLength(0)
      })

      it('gets all the hobbits', async () => {
         await db('players').insert({ name: 'Messi' })
         expect(await Players.getAll()).toHaveLength(1)

         await db('players').insert({ name: 'Ronaldo' })
         expect(await Players.getAll()).toHaveLength(2)
      })
   })

   describe('add', () => {
      it('insert player', async () => {
         // using async/await
         await Players.add({ name: 'Iniesta '})
         expect(await db('players')).toHaveLength(1)

         await Players.add({ name: 'Xavi' })
         expect(await db('players')).toHaveLength(2)
         // using regular .then method
         // Players.add({ name: 'Xavi' })
         //    .then((res) => {
         //       console.log(res)
         //       return db('players')
         //    })
         //    .then(players => {
         //       expect(players).toHaveLength(2)
         //    })
         
      })
   })

   describe('update', () => {
      it('insert and update player', async () => {
         // insert
         await db('players').insert({ name: 'Davinci' })

         // test update
         let david = await Players.update( 1, { name: 'David' })
         expect(david).toMatchObject({ id: 1, name: 'David' })

         david = await db('players').where({ id: 1 }).first()
         expect(david.name).toBe('David')
      })
   })

   describe('remove', () => {
      it('can remove', async () => {
         await db('players').insert({ name: 'David' })
         await Players.remove(1)
         expect(await db('players')).toHaveLength(0)
      })
   })
})