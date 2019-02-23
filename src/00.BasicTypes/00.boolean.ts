let isDone: boolean = false;

console.log(isDone);
isDone = true;
console.log(isDone);

// 如果配置了strictNullChecks: true 将会失败
// isDone = null;
// console.log(isDone);
// isDone = [1, 2, 4]; // Type 'number[]' is not assignable to type 'boolean'.
