import { dlopen, FFIType } from 'bun:ffi'

const path = `bin/c_libprime.so`

const lib = dlopen(path, {
    is_prime: { 
      args: [FFIType.i64], 
      returns: FFIType.i8
    },
    count_primes: { 
      args: [FFIType.i64, FFIType.i64], 
      returns: FFIType.i64 
    }
})

const start = 1_000_000
const end = 1_010_000

const startTime = performance.now()

const number = 999999937

console.log(`is_prime(${number}): `,lib.symbols.is_prime(number) )
console.log("count_primes(${start}, ${end}):", lib.symbols.count_primes(start, end))

const endTime = performance.now()

console.log(`Total time: ${(endTime - startTime).toFixed(2)} ms`);