const NaYoon = {
    name:"NaYoon",
    age:19,
    gender:"female"
};

const resolvers = {
    Query:{
        person:()=>NaYoon
    }
}

export default resolvers;