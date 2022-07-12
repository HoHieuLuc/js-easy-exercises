const persons = [
    { name: "John", age: 20 },
    { name: "Sara", age: 11 },
    { name: "Samane", age: 25 },
    { name: "Doe", age: 17 },
];

const ages = [];

persons.forEach((person) => ages.push(person.age));

console.log(ages);

persons.forEach((person) => {
    console.log(person, person.age >= 18 ? 'full age' : 'not full age');
});

const printFullAge = (ages = []) => {
    const currentYear = new Date().getFullYear();
    return ages.map((age) => currentYear - age >= 18);
}

const full1 = printFullAge([1965, 2008, 1992]);
console.log(full1);

const full2 = printFullAge([2017, 2015, 1987]);
console.log(full2);