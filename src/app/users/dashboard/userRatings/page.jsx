import React from 'react'
import prisma from '@/libs/prisma'
import Image from 'next/image'
import { authUserSession } from '@/libs/auth-libs'
import { Star } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
const userRatings = async () => {
  const user = await authUserSession()
  const ratings = await prisma.ratings.findMany({
    where: { user_email: user.user?.email }
  })
  return (
    <>
      <div className='ml-4 rounded-lg'>
        <h1 className='text-slate-800 font-semibold text-2xl mt-2'>Your Ratings</h1>
        <div className='flex gap-4 flex-wrap items-center'>
          {ratings.map(rating => {
            return (
              <Link href={`/Pages/results/${rating.movie_id}`}>
                <div  className='max-w-fit bg-slate-800 p-4 rounded-md text-white '>
                  <p>{rating.date}</p>
                  <div className='flex w-36 h-full justify-center'>
                    <div>
                    <Image className='w-36 h-48' src={`${process.env.NEXT_APP_BASEIMG}/w500${rating.movie_image}`} width={800} height={100} alt={rating.movie_title} />
                    <p className='max-w-fit text-center flex flex-wrap'>{rating.movie_title}</p>
                    </div>
                  </div>
                  <div className='flex'>
                    {[...Array(5)].map((_, index) => {
                      return (
                        <Star className={`${index+1<=rating.ratings ? 'text-yellow-400 ': 'text-gray-600'}`} key={index} weight='fill' />
                      )
                    })}
                  </div>
                  <p>{rating.ratings}/5</p>
                </div>
              </Link>

            )
          })}
        </div>

      </div>
    </>
  )
}

export default userRatings