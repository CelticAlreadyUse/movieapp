import prisma from "@/libs/prisma"

export async function POST(request) {
    const { movie_id, user_email } = await request.json()
    const data = { movie_id, user_email }

    const createCollection = await prisma.collection.create({ data })
    
    if (!createCollection) 
        return Response.json({ status: 500, isCreated: false })
   
    else  return Response.json({ status: 200, isCreated: true })
    
}