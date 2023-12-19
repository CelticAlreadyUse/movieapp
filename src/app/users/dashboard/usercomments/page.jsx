import React from 'react'
import Image from 'next/image'
import prisma from '@/libs/prisma'
import { authUserSession } from '@/libs/auth-libs'
import Link from 'next/link'
import { ArrowFatLinesLeft} from '@phosphor-icons/react/dist/ssr'
const page = async () => {
    const user = await authUserSession()
    const Comments = await prisma.comment.findMany({ where: { user_email: user.user?.email } })
    return (
        <>
                              

        
                       
         
    
    <div className='flex items-center justify-between mx-4'>    
    <Link href={`/users/dashboard`}  className='bg-gray-800 px-1 rounded-md '>
    <ArrowFatLinesLeft className='text-white' size={32} />
                        </Link> 
       {Comments.length == 0 ?  
       <div className='text-end'>
       <h1 className='ml-4 mt-2 text-2xl font-semibold '>You have no comments</h1> 
       <p className='ml-4 text-slate-400'>Go back and comment on some movies to get your history.</p>
       </div>
       
       : <h1 className='ml-4 mt-2 text-2xl font-semibold '>Your Comments</h1>}
            </div>
            <div>
                <div className="mt-2 ml-2 mb-2 flex justify-center md:justify-normal flex-wrap gap-4">

                    {Comments.map(comment => {
                        return (
                            <div className="rounded-lg px-6 py-4 bg-slate-400 w-full max-w-fit h-full">
                                <div  className="flex  items-center mb-2">
                                    <Image className="rounded-full w-9 h-9 object-cover mr-2"    width={700} height={100} src={user.user?.image} ></Image>
                                    <div>
                                        <p className=" font-semibold">{user.user?.name}</p>
                                        <p>{comment.date}</p>
                                        <p className='text-slate-600'>{comment.comment}</p>
                                    </div>
                                </div>
                                <p ></p>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </>
    )
}

export default page