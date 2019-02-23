const someValue: any = "this is a string";
const strLength: number = (<string>someValue).length;
console.log(strLength);

// 当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
const someValue2: any = "this is a string";
const strLength2: number = (someValue as string).length;
console.log(strLength2);
