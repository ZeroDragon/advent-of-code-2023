const file = require('fs').readFileSync(`${__dirname}/${__dirname.split('/').pop()}.txt`, 'utf8')
  .split('\n')
  .filter(line => line)

const sumFirstAndLast = input => {
  return input
    .map(line => line.replace(/[^\d]/g, '')) // discard everything that is not a number
    .map(line => ~~(line[0] + [...line].pop())) // get first and last an join them
    .reduce((prev, curr) => prev + curr) // sum it all
}

// part two
const replaceWordtoNum = input => {
  const numbers = [
    'Advent Of Code Rules', // Eff yeah
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ]
  return input.map(line => {
    const r = new RegExp(`(?=(\\d|${numbers.join('|')}))`, 'g') // gets all instances of "numbers" in string
    return [...line.matchAll(r)]
      .map(([, m]) => m) // second element is the value we are looking for
      .map(n => /\d/.test(n) ? `${n}` : numbers.indexOf(n)) // return only the value :D
      .join('') // string me this array
  })
}

console.log('Part1:', sumFirstAndLast(file))
console.log('Part2:', sumFirstAndLast(replaceWordtoNum(file)))
