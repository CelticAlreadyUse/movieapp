export const getPopularMovie = async(recource) =>{
    const res = await fetch(`${process.env.NEXT_APP_BASEURL}/${recource}?api_key=${process.env.NEXT_APP_APIKEY}`)
    const Movie = await res.json()
    return Movie
}
export const getSearchMovie = async(recource,query) =>{
    const res = await fetch(`${process.env.NEXT_APP_BASEURL}/${recource}?api_key=${process.env.NEXT_APP_APIKEY}&${query}`)
    const Movie = await res.json()
    return Movie
}

export const getMovieVideos = async(recource) =>{
    const res = await fetch(`${process.env.NEXT_APP_BASEURL}/${recource}/videos?api_key=${process.env.NEXT_APP_APIKEY}`)
    const Movie = await res.json()
    return Movie
}