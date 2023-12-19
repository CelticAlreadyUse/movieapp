import prisma from "@/libs/prisma"

export async function POST(request) {
    const { movie_id, user_email,ratings,user_name,movie_image,movie_title,date,user_image } = await request.json()
    const data = { movie_id, user_email,ratings,user_name,movie_image,movie_title,date,user_image }

    const createRatings = await prisma.ratings.create({ data })
    
    if (!createRatings) 
        return Response.json({ status: 500, isCreated: false })
   
    else  return Response.json({ status: 200, isCreated: true })
    
}