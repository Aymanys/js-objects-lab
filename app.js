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

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'Hard'
console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[0])

console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/
// Assuming the pokemon array has different types and HP values

game.party.push(pokemon[2], pokemon[4], pokemon[10])

console.log(game.party)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
*/

for (const gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
}
console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint:
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another.

Solve Exercise 7 here:
*/

const starter = game.party.find((pokemon) => pokemon.starter)

let evolvedPokemon
if (starter.type === 'Bulbasaur') {
  evolvedPokemon = pokemon.find((pokemon) => pokemon.name === 'Ivysaur')
} else if (starter.type === 'Charmander') {
  evolvedPokemon = pokemon.find((pokemon) => pokemon.name === 'Charmeleon')
} else if (starter.type === 'Squirtle') {
  evolvedPokemon = pokemon.find((pokemon) => pokemon.name === 'Wartortle')
} else if (starter.name === 'Pikachu') {
  evolvedPokemon = pokemon.find((pokemon) => pokemon.name === 'Raichu')
}

const starterIdx = game.party.indexOf(starter)
if (starterIdx !== -1 && evolvedPokemon) {
  game.party.splice(starterIdx, 1, evolvedPokemon)
}

console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.

Solve Exercise 9 here:
*/

pokemon.forEach((pokemon) => {
  if (pokemon.starter) {
    console.log(pokemon.name)
  }
})

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = 'yes'
  }
})

console.log(game.gyms)

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the
    properties on `gymTally` as follows:
    - `completed` should count how many gyms in the array have a value of `true`
      for their `completed` property.
    - `incomplete` should count how many gyms in the array have a value of
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const game = {
  gyms: [
    { name: 'Pewter Gym', completed: true, difficulty: 4 },
    { name: 'Cerulean Gym', completed: false, difficulty: 5 },
    { name: 'Vermilion Gym', completed: true, difficulty: 3 },
    { name: 'Lavender Gym', completed: false, difficulty: 2 },
    { name: 'Saffron Gym', completed: true, difficulty: 6 }
  ],

  gymStatus: function () {
    const gymTally = { completed: 0, incomplete: 0 }

    this.gyms.forEach((gym) => {
      if (gym.completed) {
        gymTally.completed += 1
      } else {
        gymTally.incomplete += 1
      }
    })

    console.log(gymTally)
  }
}

game.gymStatus()

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
const game = {
  party: [
    { name: 'Caterpie', type: 'bug', hp: 45 },
    { name: 'Metapod', type: 'bug', hp: 50 },
    { name: 'Butterfree', type: 'bug', hp: 60 }
  ],

  partyCount: function () {
    return game.party.length
  }
}

console.log(game.partyCount())

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game.gyms)

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.

Solve Exercise 16 here:
*/

console.log(game)
