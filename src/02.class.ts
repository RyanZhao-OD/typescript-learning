class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: number, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

const s = new Student('ryan', 13, 'zhao');
console.log(s);