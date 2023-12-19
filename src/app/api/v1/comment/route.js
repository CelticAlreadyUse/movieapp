import prisma from "@/libs/prisma"

export async function POST(request) {
    const { movie_id, user_email,comment,user_name,date,user_image } = await request.json()
    const data = { movie_id, user_email ,comment,user_name,date,user_image}

    const cretaeComment = await prisma.comment.create({ data })
    
    if (!cretaeComment) 
        return Response.json({ status: 500, isCreated: false })
   
    else  return Response.json({ status: 200, isCreated: true })
    
}