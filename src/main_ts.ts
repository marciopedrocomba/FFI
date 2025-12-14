import { isPrime, countPrimes } from './ts/prime'

const start = 1_000_000
const end = 1_010_000

const startTime = performance.now()

const number = 999999937

console.log(`isPrime(${number}): `,isPrime(number) )
console.log(`countPrimes(${start}, ${end}):`, countPrimes(start, end))

const endTime = performance.now()

console.log(`Total time: ${(endTime - startTime).toFixed(2)} ms`)