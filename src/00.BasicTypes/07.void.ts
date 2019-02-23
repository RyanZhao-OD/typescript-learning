function warnUser(): void {
    alert("This is my warning message");
    // return undefined; // 只有undefined和null ok
    // return null; // ok
    // return 1; // Type '1' is not assignable to type 'void'.
}

const warnUser2 = (str: string): void => {
    console.log('warnUser2-----');
};
warnUser2('哈哈哈哈哈啊');
