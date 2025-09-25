const factorial = num => {
  let currentNum = [];
  while (num > 0){
    currentNum.push(num);
    num--;
  }
  //console.log(currentNum);
  let factorial = currentNum.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  })
  return factorial;
}
factorial(1);