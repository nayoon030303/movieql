import { getMovies, getById, addMovie, deleteMovie, getStores} from "./db";

const resolvers = {
    Query:{
        movies:()=>getMovies(),
        movie:(_,{id})=>getById(id),
        stores:()=>getStores()
    },
    Mutation:{
        addMovie:(_,{name,score})=>addMovie(name,score),
        deleteMovie:(_,{id})=>deleteMovie(id)
    }
};

export default resolvers;