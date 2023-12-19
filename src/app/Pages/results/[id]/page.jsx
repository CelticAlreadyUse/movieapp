import { getPopularMovie } from '@/libs/api/api'
import { getMovieVideos } from '@/libs/api/api'
import { authUserSession } from '@/libs/auth-libs'
import Image from "next/image"
import CollectionMovie from '@/components/Viewlist/Collection'
import Sty from './style.module.css'
import Videos from '@/components/Viewlist/videosResults'
import AddFav from '@/components/MovieList/Addcolecctionbtn'
import prisma from '@/libs/prisma'
import ComentArea from '@/components/MovieList/commentInputBtn'
import CommentBox from '@/components/MovieList/CommentBox'
import MovieRatings from '@/components/MovieList/MovieRatings'
import RatingsRiview from '@/components/MovieList/RatingsRiview'
const Page = async ({ params }) => {
    const movieId = params.id
    const movie = await getPopularMovie(`movie/${movieId}`)
    const video = await getMovieVideos(`movie/${movieId}`)
    const Collection = await getPopularMovie(`collection/${movie.belongs_to_collection?.id}`)
    const user = await authUserSession()
    const Favorite = await prisma.collection.findFirst({
        where: { user_email: user?.email, movie_id: movieId }
    })
    const Ratings = await prisma.ratings.findFirst({
        where:{user_email:user?.user?.email,movie_id:movieId}
    })
    return (
        <div className={Sty.body}>
            <Image width={1000} className={Sty.banner} height={200} src={`${process.env.NEXT_APP_BASEIMG}/original${movie.backdrop_path}`} />
            <div className="flex md:flex-none w-0 md:w-44 h-full"></div>
            <div className=" bg-slate-900 max-w-full justify-center ">
                <div className="flex flex-wrap max-w-full w-full gap-6 mb-2 mt-2 text-xl text-slate-300">
                    <div className="w-50 h-20  px-2 rounded-r-lg bg-slate-800">
                        <h3>Popularity</h3>{movie.popularity}</div>

                    <div className="w-50 h-20 px-2 rounded-lg bg-slate-800">
                        <h3 className="w-max">Vote Average</h3>
                        {movie.vote_average}</div>
                    <div className="w-50 h-20 px-2 rounded-lg bg-slate-800">
                        <h3 className="w-28  bg-slate-800">Vote count</h3>
                        {movie.vote_count}</div>
                    <div className="w-50 h-20 px-2 rounded-lg bg-slate-800"><h3>Status</h3>
                        {movie.status}</div>

                </div >
                <div className='flex flex-wrap'>
                    <Image className='ml-2 w-52 rounded-lg h-62' width={1000} height={300} src={`${process.env.NEXT_APP_BASEIMG}/original/${movie.poster_path}`} />
                    <div>
                        <div className="w-full ml-2  text-slate-100 px-2 rounded-lg ">
                            <h3 className='w-full text-slate-100'>Genres:</h3>
                            {movie.genres?.map(genre => {
                                return (
                                    <p className="w-full">{genre.name}</p>
                                )
                            })}

                        </div>
                        <div className="px-2 ml-2 text-slate-100 w-full rounded-lg bg-slate-800">
                            <h3 className='w-max font-semibold'>Release Date  </h3>
                            <h3 className="w-max">{movie.release_date} </h3>
                        </div>
                        {!Favorite && user &&

                            < AddFav movie_id={movieId} user_email={user.user?.email} />
                        }
                    </div>

                </div>
                <div className="w-100 ">
                    <p className="text-md text-inherit text-xl font-semibold py-2 px-5 text-slate-200">{movie.title}</p>
                    <p className="text-md text-inherit text-md font-semibold -tracking-tight px-5 text-slate-200">{movie.tagline}</p>
                    <p className="text-md text-inherit text-md font-semibold -tracking-tight px-5 text-slate-200">{movie.homepage}</p>
                    <p className="text-md text-inherit py-4 px-5 text-slate-200">{movie.overview}</p>
                </div>

                <div className='text-xl max-w-screen-lg pb-4 ml-4 text-white'>
                    {movie.belongs_to_collection == null ? null :
                        <CollectionMovie className="w-100" data={Collection} />
                    }
                    <div className='max-w-full '>

                        <Videos Videos={video} />
                    </div>
                </div>
                <div>
                    {!Ratings && user &&
                    <MovieRatings movie_id={movieId} user_image={user.user?.image} user_email={user.user?.email} movie_title={movie.title} user_name={user.user?.name} movie_image={movie.poster_path}/>
                    }
                    {user && 
                   
                    <ComentArea user_image={user.user?.image} movie_id={movieId} user_email={user.user?.email} user_name={user.user?.name} />
                   
      
                    }
                         <RatingsRiview movie_id={movieId}/>           
                        <CommentBox movie_id={movieId}/>
                    
                </div>

            </div>
            
            <div className="flex-none w-0 md:w-44 h-full"></div>
        </div>
    )
}
export default Page