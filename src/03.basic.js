// boolean
var isDone = false;
console.log(isDone);
// number 整数和浮点数
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
// 字符串
var str = 'ryan';
str = 'zhao';
console.log(str);
// 数组
var numList;
numList = [1, 2, 3];
console.log(numList);
// 所有元素都是string的数组
var strList;
// 或者let strList: Array<string>;
strList = ['ryan', 'zhao'];
console.log(strList);
// 元组 Tuple
var tuple = [false, 12];
console.log(tuple);
// enum 默认情况下，从0开始为元素编号
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);

