'use client'
import MovieList from '@/components/MovieList/seeall'
import Pagination from '@/components/Navigation/navigation/footer/pagination'
import { useEffect, useState } from 'react'
const Page = ({ params }) => {
    const [page, setPage] = useState(1)
    const [Movie, setMovie] = useState([])
    
    const Id = params.results
    const baseUri = 'https://api.themoviedb.org/3'
    const Apikey = 'd72cb23aeccf5cf48d66a110c5870469'
    const GetApi = async () => {
        const res = await fetch(`${baseUri}/movie/${Id}?api_key=${Apikey}&page=${page}`)
        const Movies = await res.json()
        setMovie(Movies)
    }
    useEffect(() => {
        GetApi()
    }, [Movie])
    const lastPage = Movie.total_results
    const Image = 'https://image.tmdb.org/t/p'
    return (
        <>
            <MovieList judul={Id} api={Movie} img={Image} title="See all" name={Id} />
            <Pagination page={page} setPage={setPage } total={lastPage} />
        </>
    )
}
export default Page