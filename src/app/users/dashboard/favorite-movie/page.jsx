
import { authUserSession } from '@/libs/auth-libs'
import Pathname from '../components/PathName'
import prisma from '@/libs/prisma'
import FavoriteCard  from '../components/favorite-cards'
import { ArrowFatLinesLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
const  Page = async() => {
    const user  = await authUserSession()
    const favorite = await prisma.collection.findMany({where:{user_email:user.user.email}})
    return (
        <>
            <div>
                    <Pathname/>
                    <div className="w-full h-full border-black  border-solid">
                        <div className='flex items-center justify-between mx-4'>
                        <Link href={`/users/dashboard`}  className='bg-gray-800 px-1 rounded-md '>
    <ArrowFatLinesLeft className='text-white' size={32} />
                        </Link> 
        <h1 className="flex text-2xl ml-1 font-sans font-semibold">Your Favorite Movie </h1>
                        </div>
        <div className="flex gap-7 w-full flex-wrap justify-center items-start mt-4">
            {favorite.map((favorite,index)=>{
                return(
                    <>
                    <FavoriteCard  key={index} id={favorite.movie_id}/>
                    
             
                    </>
                )
            })
            }
        </div>
    </div>
            </div>
        </>
    )
}

export default Page
