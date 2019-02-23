let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

decLiteral = NaN; // ok
console.log(decLiteral);

// Type 'Number' is not assignable to type 'number'.
// 'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.
// decLiteral = new Number(123);
// console.log(decLiteral);


decLiteral = +0;
console.log(decLiteral);

decLiteral = -0;
console.log(decLiteral);
