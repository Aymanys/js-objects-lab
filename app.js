const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
console.dir(pokemon, { maxArrayLength: null })
console.log(game)

//Exercise 3

game.difficulty = 'Hard'
console.log(game)

//Exercise 4
game.party.push(pokemon[0])

//Exercise 5
game.party.push(pokemon[2], pokemon[4], pokemon[10])

//Exercise 6
for (const gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
}
console.log(game.gyms)

//Exercise 7

const starterIndex = game.party.findIndex((pokemon) => pokemon.starter)
const evolvedPokemon = pokemon[starterIndex + 1]
game.party.splice(starterIndex, 1, evolvedPokemon)

//Exercise 8

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

//Exercise 9

pokemon.forEach((pokemon) => {
  if (pokemon.starter) {
    console.log(pokemon.name)
  }
})

//Exercise 10

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
}

game.catchPokemon(pokemon[0])

//Exercise 11

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)

  const pokeballItem = game.items.find((item) => item.name === 'Pokéball')
  if (pokeballItem) {
    pokeballItem.quantity--
  }
}

const pokemonToCatch = pokemon.find((pokemon) => pokemon.name === 'Pikachu')
game.catchPokemon(pokemonToCatch)

//Exercise 12

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = 'true'
  }
})

console.log(game.gyms)

//Exercise 13

game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 }
  this.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  })
  console.log(gymTally)
}

game.gymStatus()

//Exercise 14

game.partyCount = function () {
  return this.party.length
}

console.log(game.partyCount())

//Exercise 15

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game.gyms)

//Exercise 16
console.log(game)
