const LIVE = '*'
const DEAD = '-'

const mock = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, LIVE, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, LIVE, LIVE, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD]
]

function check (currentGeneration = mock) {
  const newGeneration = [...currentGeneration]

  for (let i = 0; i < newGeneration.length; i++) {
    for (let j = 0; j < newGeneration[i].length; j++) {
      let neigthborsLives = 0
    }
  }

  return newGeneration
}

check()

// Born
// Survive
// Dead
