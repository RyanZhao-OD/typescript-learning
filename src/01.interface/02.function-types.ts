interface SearchFunc {
    (source: string, subString: string): boolean;
    // (name: string, age: string): string;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

console.log(mySearch('abcde', 'b'));
