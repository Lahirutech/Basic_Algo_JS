function checkpalingDrom(check:string){
  let arr=check.split("")
  let newArr=[]
  for (let index = arr.length; index >= 0; index--) {
    newArr.push(arr[index])
  }
  var final =newArr.join("")
  console.log(final)
  return final == check
}
console.log(checkpalingDrom("aba"))
