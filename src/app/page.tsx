import MovieList from '../components/MovieList/index'
import   {getPopularMovie} from '../libs/api/api'
import Header from '../components/homeComponents/header'
const Home = async() => {
  const Movies = await getPopularMovie('movie/popular')
  const Image = process.env.NEXT_APP_BASEIMG
  const Upcoming = await getPopularMovie('movie/upcoming')
  const topRated = await getPopularMovie('movie/top_rated')
  const Nowplaying = await getPopularMovie('movie/now_playing')
  const limitPopular = Movies.results.splice(0,8)
  const limitUpcoming = Upcoming.results.splice(0,8)
  const limitNowPlaying = Nowplaying.results.splice(0,12)
  const limitToprated = topRated.results.splice(0,8)
  return (
<>
    <Header/>
     <MovieList judul="Now Playing" title="See All" api={limitNowPlaying} name="now_playing" img={Image}/>
     <MovieList judul="Movie Popular" title="See All" api={limitPopular} name="popular" img={Image}/>
     <MovieList judul="Up Coming movie" title="See All" api={limitUpcoming} name="upcoming" img={Image}/>
     <MovieList judul="Top Rated Movie" title="See All" api={limitToprated} name="top_rated" img={Image}/>
    </>
    )
}

export default Home