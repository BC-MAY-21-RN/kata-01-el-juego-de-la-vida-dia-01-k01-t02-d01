const LIVE = '*'
const DEAD = '-'

const mock = [
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [LIVE, LIVE, LIVE, DEAD, DEAD, DEAD, DEAD, DEAD],
  [LIVE, LIVE, LIVE, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD]
]

function check(currentGeneration = mock) {
  const newGeneration = [...currentGeneration];

  // for (let i = 0; i < newGeneration.length; i++) {
  //   for (let j = 0; j < newGeneration[i].length; j++) {
  //     newGeneration[i][j] = DEAD;
  //   }
  // }

  for (let i = 0; i < newGeneration.length; i++) {
    for (let j = 0; j < newGeneration[i].length; j++) {
      let neigthborsLives = 0;
      if (i - 1 >= 0) { // pasa fila superior
        if (currentGeneration[i - 1][j] === LIVE) {
          neigthborsLives++;
        }
        if (j - 1 >= 0) {
          if (currentGeneration[i - 1][j - 1] === LIVE) {
            neigthborsLives++;
          }
        }
        if (j + 1 < currentGeneration[i].length) {
          if (currentGeneration[i - 1][j + 1] === LIVE) {
            neigthborsLives++;
          }
        }
      }
      if (i + 1 < currentGeneration.length) { // pasa fila inferior
        if (currentGeneration[i + 1][j] === LIVE) {
          neigthborsLives++;
        }
        if (j - 1 >= 0) {
          if (currentGeneration[i + 1][j - 1] === LIVE) {
            neigthborsLives++;
          }
        }
        if (j + 1 < currentGeneration[i].length) {
          if (currentGeneration[i + 1][j + 1] === LIVE) {
            neigthborsLives++;
          }
        }
      }
      if (j - 1 >= 0) { // pasa columna izquierda
        if (currentGeneration[i][j - 1] === LIVE) {
          neigthborsLives++;
        }
      }
      if (j + 1 < currentGeneration[0].length) { // pasa columna derecha
        if (currentGeneration[i][j + 1] === LIVE) {
          neigthborsLives++;
        }
      }

      if (currentGeneration[i][j] === DEAD) {
        if (neigthborsLives === 3) {
          newGeneration[i][j] = LIVE;
        }
      } else if (currentGeneration[i][j] === LIVE) {
        if (neigthborsLives <= 2 || neigthborsLives > 3) {
          newGeneration[i][j] = DEAD;
        }
      }

    }
  }

  return newGeneration
}

let join = '';

for (let i = 0; i < mock.length; i++) {
  join += mock[i].join('').concat('\n');
}

console.log(join);

setInterval(() => {
  let board = check(mock);
  let join = '';

  for (let i = 0; i < board.length; i++) {
    join += board[i].join('').concat('\n');
  }

  console.log(join);
}, 100);

// while (true) {

// }

// Born
// Survive
// Dead
