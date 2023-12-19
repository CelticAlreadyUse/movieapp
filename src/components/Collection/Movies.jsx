import Image from 'next/image'
import Link from 'next/link'
const Movies = ({ movies }) => {
    const img = process.env.NEXT_APP_BASEIMG
    return (
        <>
            <h1 className='text-xl mt-8 font-bold'>Movies</h1>
            {movies.parts.map(movie => {
                return (
                    <Link href={`/Pages/results/${movie.id}`} className=' flex ml-2 items-top h-72 w-full'    >
                        <Image className='mb-2 object-cover w-40 h-60 rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={180} height={500} />
                        <div  className='ml-2'   >
                        <h1 className='text-xl font-bold'>{movie.title}</h1>
                        <p className='text-ellipsis overflow-hidden whitespace-normal break-words w-60 h-40
                         flex-wrap block'>{movie.overview}</p>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}
export default Movies