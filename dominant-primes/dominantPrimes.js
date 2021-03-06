function isPrime (num) {
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
function solve(a, b) {
  let primeNumbers = [];
  for (let i = 2; i <= b; i++){
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  let dominantPrimes = 0;
  for (let i = 0; i < primeNumbers.length; i++){
    if (isPrime(i+1) && primeNumbers[i] >= a){
      dominantPrimes += primeNumbers[i];
    }
  }
  return dominantPrimes;
}