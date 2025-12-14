package main

import "C"

//export IsPrime
func IsPrime(n int64) bool {
	if n <= 1 {
		return false
	}
	if n <= 3 {
		return true
	}
	if n%2 == 0 || n%3 == 0 {
		return false
	}
	for i := int64(5); i*i <= n; i += 6 {
		if n%i == 0 || n%(i+2) == 0 {
			return false
		}
	}
	return true
}

//export CountPrimes
func CountPrimes(start, end int64) int64 {
	count := int64(0)
	for i := start; i <= end; i++ {
		if IsPrime(i) {
			count++
		}
	}
	return count
}

func main() {}

// go build -buildmode=c-shared -o go_libprime.so is_prime.go
