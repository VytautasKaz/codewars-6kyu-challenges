function isPrime(x) {
    for (let i = 2; i <= x/2; i++){
        if (x % i === 0){
            return false;
        } 
    }
    return true;
}
function numPrimorial(n){
  let primeNumber = [];
  for (let j = 2; primeNumber.length < n; j++) {
      if (isPrime(j)){
          primeNumber.push(j);
      }
  }
  let primorialNumber = primeNumber.reduce(function (a, b){
      return a * b;
  }, 1);
  return primorialNumber;
}