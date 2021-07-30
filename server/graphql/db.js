export let movies = [
    {
        id:1,
        name:"Star Wars - The new one",
        score:1
    },
    {
        id:2,
        name:"Avengers - The new one",
        score:8
    },
    {
        id:3,
        name:"The Godfather I",
        score:99
    },
    {
        id:4,
        name:"Logan",
        score:2
    }
];

export let stores = [
    {
        id: 1,
        address_name: "서울 용산구 이태원동 127-28",
        category_group_code: "FD6",
        category_group_name: "음식점",
        category_name: "음식점 > 한식 > 육류,고기" ,
        distance: "???",
        phone: "02-793-2268",
        place_name: "로우앤슬로우",
        place_url: "http://place.map.kakao.com/1376253571",
        road_address_name: "서울 용산구 보광로 126",
        x: "126.99421849699539",
        y: "37.53401162895581" 
    },
    {
        id: 2,
        address_name: "서울 용산구 이태원동 127-28",
        category_group_code: "FD6",
        category_group_name: "음식점",
        category_name: "음식점 > 한식 > 육류,고기" ,
        distance: "???",
        phone: "02-793-2268",
        place_name: "로우앤슬로우",
        place_url: "http://place.map.kakao.com/1376253571",
        road_address_name: "서울 용산구 보광로 126",
        x: "126.99421849699539",
        y: "37.53401162895581" 
    }
]

export const getMovies = ()=>movies;

export const getStores = ()=>stores;

export const getById = id=>{
    const filterMovies = movies.filter(movie=>movie.id === id);
    return movies[0];
}

export const deleteMovie = (id)=>{
    const cleanedMovies = movies.filter(movie=>movie.id !==id);
    if(movies.length>cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false
    }
}

export const addMovie = (name,score)=>{
    const newMovie ={
        id:`${movies.length+1}`,
        name,
        score
    } ;
    movies.push(newMovie);

    return newMovie;
}