import prisma from '@/libs/prisma'
import Image from 'next/image'
const CommentBox = async ({ movie_id }) => {
    const comments = await prisma.comment.findMany({ where: { movie_id } })

    return (
        <>
            <div>
        {comments.length == 0 ? <h1 className="ml-4 text-white text-center text-2xl">looks like this movie doesn't have any comments yet.</h1>:
                <h1 className="ml-4 text-white font-semibold text-2xl">Comments</h1>
        }
                <div className="mt-2 ml-2 mb-2 flex justify-center md:justify-normal flex-wrap gap-4">
                    {comments.map(comment => {
                        return (
                            <>
                                <div key={comment.id} className="rounded-sm px-4 py-3 bg-slate-400 w-full max-w-fit h-full">
                                    <div className="flex items-center mb-2">
                                        <Image className="rounded-full w-9 h-9 object-cover mr-2" width={700} height={100} src={comment?.user_image}></Image>
                                        <div>
                               
                                            <p className="ml-2 font-semibold">{comment.user_name}</p>
                                            <p className='text-slate-600'>{comment.date}</p>
                                        </div>
                                    </div>
                                    <p >{comment.comment}</p>
                                </div>
                            </>
                        )

                    })}

                </div>
             
     
            </div>
        </>
    )
}


export default CommentBox