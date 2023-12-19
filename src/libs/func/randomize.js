// import {getSearchMovie} from '../api/api'
 export const randomsGet = (first, thrid) => {
    const Recouse = {
       one:first,three:thrid
    //    one:'tes1', two:'tes2',three:'tes 3',four:'tes4'
    }
    let results;
    const random = Math.floor(Math.random() * 1000) + 1;
    if (random > 0 && random < 500) {
        results =  Recouse.one
    } else{
         results = Recouse.three
    }
    return [results,random]
    
    // const  movies = await getSearchMovie(`/movie/${results}`,`page=${random}`)
    // return movies
}
