function findUnique(numbers) {
    if (numbers.length === 1){
      return numbers[0];
    }
    let uniqueNumber = null;
    let sortedNumbers = numbers.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1]){
        uniqueNumber = numbers[i];
      }
    }
    return uniqueNumber;
    
    // for (let i = 0; i < numbers.length; i++){
    //     if (numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])){
    //       continue;
    //     }
    //     unique = numbers[i];
    //   }
    //   return unique;
}