// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

// 如果配置了strictNullChecks: true 将会失败
// Type 'null' is not assignable to type 'undefined'.
// u = null;
// n = undefined;
// console.log(u);
// console.log(n);
