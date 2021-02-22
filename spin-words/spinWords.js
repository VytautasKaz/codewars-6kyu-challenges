function spinWords(str) {
  let spunWord = str
    .split(" ")
    .map((x) => {
      if (x.length >= 5) {
        return x.split("").reverse().join("");
      }
      return x;
    })
    .join(" ");

  return spunWord;
}
