function numFibonacci(num) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= num; i++){
    next = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci = [...fibonacci, next]
  }

  return fibonacci
}

console.log(numFibonacci(10))
