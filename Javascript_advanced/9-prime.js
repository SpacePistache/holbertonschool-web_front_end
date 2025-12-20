function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

const start = performance.now();
const totalPrimes = countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
console.log(`Total prime numbers between 2 and 100: ${totalPrimes}`);
