// boolean
let isDone: boolean = false;
console.log(isDone);

// number 整数和浮点数
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);

// 字符串
let str: string = 'ryan';
str = 'zhao';
console.log(str);

// 数组
let numList: number[];
numList = [1, 2, 3];
console.log(numList);

// 所有元素都是string的数组
let strList: string[];
// 或者let strList: Array<string>;
strList = ['ryan', 'zhao'];
console.log(strList);

// 元组 Tuple
let tuple: [boolean, number] = [false, 12];
console.log(tuple);

// enum 默认情况下，从0开始为元素编号
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);

// void

// null undefined

// never

// 类型断言