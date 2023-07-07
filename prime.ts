function primeNumber(prime: number): boolean {
  if (prime > 1) {
    for (let i = 2; i < prime; i++) {
      if (prime % i === 0) {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

console.log(primeNumber(11)) // true
console.log(primeNumber(13)) // true
console.log(primeNumber(17)) // true
console.log(primeNumber(20)) // false
console.log(primeNumber(35)) // false
console.log(primeNumber(18)) // false
console.log(primeNumber(7)) // true
