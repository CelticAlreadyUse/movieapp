import {getSearchMovie} from '@/src/libs/api/api'
import Image from "next/image"
import Pagination from '@/src/components/Navigation/navigation/footer/pagination'
import Link from "next/link"
import Styles from '@/src/components/homeComponents/compo.module.css'
import { decode } from 'punycode'
const Page = async({params}) =>{
    const parameter = params.content
    const newUri =decodeURI(parameter)
    const Movies = await getSearchMovie(`search/movie`,`query=${newUri}`)
    const Img = process.env.NEXT_APP_BASEIMG
    return(
        <div className='max-w-full'>     
<div className='mb-4 ml-3 text-3xl mt-2 font-bold tracking-tight text-center text-gray-900 '>Search for: {newUri}</div>

<div className='flex flex-wrap gap-8 justify-center items-center'>
            {Movies.results?.map(movie=>{
                return(
                    <Link  key={movie.id} href={`/Pages/results/${movie.id}`} className={Styles.CardImgs}>
                    <Image className={Styles.imgSet} width={100} height={100}  src={`${Img}/original/${movie.poster_path}`}/>
                    <div className={Styles.movieTitle}>{movie.title}</div>
                    <div className={Styles.overviewCards}>
                    <div className={Styles.overview} >{movie.overview}...</div>
                    <div className={Styles.overviewRate}>
                        <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.125 7.092l2.608-3.47q.238-.321.566-.472Q11.627 3 12 3q.373 0 .701.15q.328.15.566.471l2.608 3.471l4.02 1.368q.534.18.822.606q.289.425.289.939q0 .237-.07.471q-.07.234-.228.449l-2.635 3.573l.1 3.83q.025.706-.466 1.189q-.492.483-1.144.483l-.453-.056L12 18.733l-4.11 1.211q-.125.05-.24.053q-.117.003-.213.003q-.666 0-1.15-.483q-.485-.483-.46-1.188l.1-3.856l-2.629-3.548q-.159-.217-.228-.453Q3 10.236 3 10q0-.506.297-.942q.296-.435.828-.618l4-1.348Z"></path></svg>
                        </div>
                     <p>   {movie.vote_average}</p>
                     </div>
                    </div>
                    </Link>
                )
            })}
      </div>
            {Movies.total_results <1 ?  <div className="w-screen">
               <div className='flex items-center justify-center'>
                {/* <Image className='w-40' src={Rollicon}/> */}
                <h1 className="font-semibold text-4xl text-gray-800">Oops. looks like the movie was not found</h1></div>
                </div> 
                : null
            }
        </div>
    )
}
export default Page