interface Person {
    name: string;
    age: number;
}

const greeter2 = (person: Person) => `Hello, ${person.name} ${person.age}`;

var user2 = {
    name: 'od',
    age: 18
};

console.log(greeter2(user2));
