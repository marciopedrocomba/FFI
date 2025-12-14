import { dlopen, FFIType } from 'bun:ffi'

const path = `bin/go_libprime.so`

const lib = dlopen(path, {
  IsPrime: {
    args: [FFIType.i64],
    returns: FFIType.bool
  },
  CountPrimes: { 
    args: [FFIType.i64, FFIType.i64], 
    returns: FFIType.i64 
  },
})

const start = 1_000_000
const end = 1_010_000

const startTime = performance.now()

const number = 999999937

console.log(`IsPrime(${number}): `,lib.symbols.IsPrime(number) )
console.log(`CountPrimes(${start}, ${end}):`, lib.symbols.CountPrimes(start, end))

const endTime = performance.now()

console.log(`Total time: ${(endTime - startTime).toFixed(2)} ms`);