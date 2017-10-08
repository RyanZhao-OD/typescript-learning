interface Person {
    name: string;
    age: number;
}

const greeter = (person: Person) => `Hello, ${person.name} ${person.age}`;

var user = {
    name: 'od',
    age: 18
};

console.log(greeter(user));