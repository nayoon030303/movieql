export const people = [
    {
        id:1,
        name:"NaYoon",
        age:19,
        gender:"female"
    },
    {
        id:2,
        name:"NaYoon",
        age:20,
        gender:"female"
    },
    {
        id:3,
        name:"NaYoon",
        age:21,
        gender:"female"
    },
    {
        id:4,
        name:"NaYoon",
        age:22,
        gender:"female"
    },
];

export const getById = id=>{
    const filterPeople = people.filter(person=>id === person.id);
    return people[0];
}