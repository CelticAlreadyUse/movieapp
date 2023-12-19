'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
const Collection = ({data }) => {
    const Background = `/original${data.backdrop_path}`
    const Wraping = styled.div`
 background-size:cover;
 border-radius:10px;
 color:white;
 z-index:1;
`
const Title = styled.div`
mix-blend-mode:none;
filter:none;
color:white;
`
    return (
        <>
        <div className='w-11/12 h-96 md:w-96 md:h-96 md:mt-2'>
        <div className='z-10 drop-shadow-[0_24px_70px_blue] mt-2 w-9/12 ml-2 absolute text-white'>
            <Title className="text-2xl z-10 text-white font-bold -tracking-tight">Part Of {data.name}</Title>
            <div className='flex flex-wrap '>
            {data.parts?.map(part=>{
                return(

                    <h1 className='mix-blend-multiply font-semibold' >{part.title},</h1>       
             
                    )
                })}
                </div>
                <Link href={`/Pages/collection/${data.id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-3 dark:focus:ring-blue-800">
See Collection
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</Link>
                </div>
                <Wraping className='ml-0 w-9/12 h-4/6 absolute'  >
            <Image className='w-full object-cover max-h-80  rounded-xl opacity-40 ' width={1000} height={100} src={`https://image.tmdb.org/t/p${Background}`} />
        </Wraping>
        </div>
        </>

    )
}
export default Collection
