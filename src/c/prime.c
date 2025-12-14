#include <stdint.h>

int is_prime(int64_t n) {
    if (n <= 1) return 0;
    if (n <= 3) return 1;
    if (n % 2 == 0 || n % 3 == 0) return 0;

    for (int64_t i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return 0;
    }
    return 1;
}

int64_t count_primes(int64_t start, int64_t end) {
    int64_t count = 0;
    for (int64_t i = start; i <= end; i++) {
        count += is_prime(i);
    }
    return count;
}

//gcc -shared -o c_libprime.so -fPIC is_prime.c