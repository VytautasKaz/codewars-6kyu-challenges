function findOdd(A) {
  let final = 0;
  for (let i = 0; i <= A.length; i++) {
    let counter = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      final = A[i];
    } else {
      counter = 0;
    }
  }
  return final;
}
