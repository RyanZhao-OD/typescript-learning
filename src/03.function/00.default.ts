const defaultFunc = (name: string = 'ryan', age: number = 20): string => {
    return `${name} ${age}`;
}

console.log(defaultFunc());
console.log(defaultFunc('od', 25));
