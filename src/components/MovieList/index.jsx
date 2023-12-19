import Image from "next/image"
import Styles from '@/components/homeComponents/compo.module.css'
import Link from "next/link"
const Page = ({api,img,name,title,judul}) =>{
    return(
    <>
               <div className='flex justify-between'>
<h1 className='mb-4 ml-0 xl:ml-3 text-3xl font-bold tracking-tight text-center text-gray-900 '>{judul}</h1>
<Link href={`/Pages/showAll/${name}`} className='mr-3'>{title}</Link>
            </div>
            <div className='ml-0 flex justify-center flex-wrap gap-6  xl:grid-cols-4 '>
            {api.map(apis=>{
                return(
                    <Link  key={apis.id} href={`/Pages/results/${apis.id}`} className={Styles.CardImgs}>
                    <Image alt='movie' className={Styles.imgSet} width={1000} height={100} src={`${img}/original/${apis.poster_path}`}/>
                    <div className={Styles.movieTitle}>{apis.title}</div>
                    <div className={Styles.overviewCards}>
                    <div className={Styles.overview} >{apis.overview}...</div>
                    <div className={Styles.overviewRate}>
                        <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="m8.125 7.092l2.608-3.47q.238-.321.566-.472Q11.627 3 12 3q.373 0 .701.15q.328.15.566.471l2.608 3.471l4.02 1.368q.534.18.822.606q.289.425.289.939q0 .237-.07.471q-.07.234-.228.449l-2.635 3.573l.1 3.83q.025.706-.466 1.189q-.492.483-1.144.483l-.453-.056L12 18.733l-4.11 1.211q-.125.05-.24.053q-.117.003-.213.003q-.666 0-1.15-.483q-.485-.483-.46-1.188l.1-3.856l-2.629-3.548q-.159-.217-.228-.453Q3 10.236 3 10q0-.506.297-.942q.296-.435.828-.618l4-1.348Z"></path></svg>
                        </div>
                     <p>   {apis.vote_average}</p>
                     </div>
                    </div>
                    {/* <div>{apis.title}</div> */}
                    </Link>
                )
            })}
            </div>
        </>
    )
}
export default Page