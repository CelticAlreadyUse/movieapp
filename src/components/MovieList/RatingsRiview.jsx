import React from 'react'
import prisma from '@/libs/prisma'
import { Star } from "@phosphor-icons/react/dist/ssr"
import Image from 'next/image'
const RatingsRiview = async({movie_id}) => {
    const Riviews = await prisma.ratings.findMany({
        where:{movie_id}
    })
    return (
        <>
    <h1 className='text-white font-semibold text-2xl ml-4'>Ratings From User</h1>
    <div className='flex gap-4 flex-wrap'>
    {Riviews.map((riview)=>{
        return(
            <>
            <div key={Riviews.id} className='p-4 max-w-fit rounded-lg ml-2 bg-slate-800 w-full text-white '>
                <div className='flex items-center'>
            <Image className='w-9 h-9 rounded-full p-2' width={200} height={200} src={riview.user_image} />
                <p className='text-white font-bold'>{riview.user_name}</p>
                    </div>
                <div className='flex ml-2'>
                {[...Array(5)].map((_,index)=>{
                    return(
                        <Star  key={index } 
                        weight='fill'
                        className={`${index + 1 <= riview.ratings ? 'text-yellow-400 ' : 'text-slate-400'}cursor-pointer`}   
                        />
                    )
                })}
                </div>
                </div>
            </>
        )
    })}
    </div>
        </>
        
  )
}

export default RatingsRiview