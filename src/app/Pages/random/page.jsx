import {randomsGet} from '@/libs/func/randomize'
import {getSearchMovie}  from '@/libs/api/api'
import MovieList from '@/components/MovieList/seeall'
const RandomPage = async() =>{
    const [Random,angka] =  randomsGet('popular','top_rated')
    const Movies = await getSearchMovie(`movie/${Random}`,`page=${angka}`)
    const Image = process.env.NEXT_APP_BASEIMG
    
    return(
        <div>
            <MovieList api={Movies} name="" img={Image}/>
        </div>
    )
}
export default RandomPage