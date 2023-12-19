import Image from 'next/image'
import { authUserSession } from '@/libs/auth-libs'
import Link from 'next/link'
const Page  = async() =>{
    const users = await authUserSession()
    return(
        <>
        <div className='w-full h-20 bg-slate-800 py-2'>
            <div className='text-xl ml-2 font-bold mt-2 flex items-center'>
        <Image width={32} height={32} src={users.user.image}/>
        <h1 className='text-white ml-2'>Hello!{users.user.name}</h1>
            </div>
            <div>

        <p className='tracking-wide text-md text-gray-500 ml-2'>{users.user.email}</p>
            </div>
            </div>
            <div className='flex gap-4 mt-2 ml-2'>
                <Link  href={`/users/dashboard/favorite-movie`} className={`p-2 font-semibold rounded-md bg-slate-800 text-white`}>Favorite Movie</Link>
                <Link href={`/users/dashboard/usercomments`} className={`p-2 font-semibold bg-slate-800 text-white rounded-md`}>Comment History</Link>
                <Link href={`/users/dashboard/userRatings`} className={`p-2 font-semibold bg-slate-800 text-white rounded-md`}>Your Ratings</Link>
            </div>
        </>
    )
}
export default Page