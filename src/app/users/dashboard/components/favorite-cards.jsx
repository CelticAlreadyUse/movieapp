import React from 'react'
import Image from 'next/image'
import {getPopularMovie} from '@/libs/api/api'
import Link from 'next/link'
const favorite = async({id,key}) => {
    const Movies = await getPopularMovie(`/movie/${id}`)
  return (
    <>
       <Link key={key} href={`/Pages/results/${id}`} className="w-52  h-full mb-4  overflow-ellipsis overflow-y-visible overflow-x-hidden">
        <Image className='w-52 h-72 object-fit rounded-lg shadow-lg hover:brightness-75'  width={1200} height={100} src={`${process.env.NEXT_APP_BASEIMG}/w500${Movies.poster_path    }`} alt="Favorite Image"/>
        <div className='flex w-full justify-center  bg-slate-800 rounded-lg mt-2'>
        <h3 className='text-2xl font-semibold text-center mt-1px-4 max-w-fit text-blue-500'>{Movies.title}</h3>
        </div>
       
            </Link>
            </>
  )
}

export default favorite