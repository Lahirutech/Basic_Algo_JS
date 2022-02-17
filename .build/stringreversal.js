function reverse(word) {
  const wordArr = word.split("");
  const newArr = [];
  for (let i = wordArr.length - 1; i >= 0; i--) {
    newArr.push(wordArr[i]);
  }
  console.log(newArr.join(""));
}
reverse("Hellow");
//# sourceMappingURL=stringreversal.js.map
