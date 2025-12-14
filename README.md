# FFI Prime Checker - C, Go, and TypeScript Experiment

This project demonstrates the use of **FFI (Foreign Function Interface)** in **Bun** to run **native C and Go functions**, and compares them to a **pure TypeScript implementation**.  

The goal is to **check if a number is prime** and **count primes in a range**, while measuring **performance differences** between the three implementations.

---

## 📦 Project Structure

ffi/
├─ src/
│ ├─ c/
│ │ └─ prime.c # Functions is_prime and count_primes in C
│ ├─ golang/
│ │ └─ prime.go # Functions IsPrime and CountPrimes in Go
│ ├─ main_c.ts # Bun script that runs C functions via FFI
│ ├─ main_go.ts # Bun script that runs Go functions via FFI
│ └─ main_ts.ts # Bun script that runs TypeScript functions
├─ bin/
│ ├─ c_libprime.so # Compiled C library
│ └─ go_libprime.so # Compiled Go library
├─ package.json
└─ tsconfig.json

---

## ⚡ Requirements

- **Bun** (`v1.0+`)  
- **GCC** to compile C  
- **Go** (`v1.21+`)  
- **TypeScript** (`v5+`)  

---

## 🏃 Scripts

### 1. Build libraries

```bash
bun run build:c    # Compile C library
bun run build:go   # Compile Go library

2. Run examples
bun run ts        # Run TypeScript version
bun run c         # Run C via FFI
bun run go        # Run Go via FFI
💻 Example Usage
main_c.ts / main_go.ts / main_ts.ts:


📊 Observations from the Experiment
TypeScript (Bun) can be surprisingly fast for small or medium workloads, thanks to Bun's JIT optimizations.

C via FFI performs extremely well for heavy computation, especially when the logic runs in loops internally.

Go via FFI is slightly slower than C for very small tasks, due to FFI call overhead, but scales well for batch computations.

⚠️ Insight: For tiny functions, overhead from FFI can make TypeScript faster.
For larger tasks or loops, C and Go shine.

### 🔧 Function Overview

| Language   | Function                                        | Description                          |
|------------|-------------------------------------------------|--------------------------------------|
| TypeScript | `isPrime(n: number)`                            | Check a single number                |
| TypeScript | `countPrimes(start, end)`                       | Count primes in a range              |
| C          | `is_prime(n int64) -> int8`                     | Check a single number via FFI        |
| C          | `count_primes(start int64, end int64) -> int64` | Count primes in a range via FFI |
| Go         | `IsPrime(n int64) -> int32`                     | Check a single number via FFI        |
| Go         | `CountPrimes(start, end int64) -> int64`        | Count primes in a range via FFI      |
