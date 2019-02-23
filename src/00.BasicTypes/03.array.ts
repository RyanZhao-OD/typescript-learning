let list: number[] = [1, 2, 3];
console.log(list);

// list = [2, 3, '3']; // Type 'string' is not assignable to type 'number'.
// console.log(list);

// list.push('aaa'); // Argument of type '"aaa"' is not assignable to parameter of type 'number'.
// console.log(list);

let list2: Array<number> = [4, 5, 6];
console.log(list2);
