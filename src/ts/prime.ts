export function isPrime(n: number): boolean {
  if (n <= 1) return false
  if (n <= 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }

  return true
}

export function countPrimes(start: number, end: number): number {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) count++
  }
  return count
}