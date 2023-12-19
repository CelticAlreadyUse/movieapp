'use client'
import React, { useState } from 'react'
import { Star } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from 'next/navigation'
const MovieRatings = ({ movie_id, user_email, user_name, movie_image, movie_title,user_image }) => {
    const [mouseOut, setMouseOut] = useState(0)
    const [ratings, setSelectedSTarCount] = useState(0)
    const [isCreated, setIsCreated] = useState(false)
    const router = useRouter()
    const addStar = (index, event) => {
        event.preventDefault()
        if (index + 1 == 0) {
            setSelectedSTarCount(0)
        } else if (ratings == 1) {
            setSelectedSTarCount(0)
        }
        else {
            setSelectedSTarCount(index + 1)
        }

    }
    const tipe = new Date()
    const date = tipe.toLocaleDateString()
    const submitRatings = async (e) => {
        e.preventDefault()
        const data = { movie_id, user_email, ratings,user_name,movie_image,movie_title,date,user_image }
        const response = await fetch("/api/v1/ratings", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const submitRatings = await response.json()
        if (submitRatings.status == 200) {
            setIsCreated(true)
            setSelectedSTarCount(0)
            router.refresh()
            return
        }
    }
    return (
        <>
            <div className='grid items-center'>

                <p className="text-white font-semibold text-2xl mb-1 text-center">Add Movie Ratings</p>
           

                    {isCreated&& <p className='text-white font-semibold text-center text-xl'>Thanks for rate this movie</p>}
                <div className="flex justify-center gap-4 py-6 bg-slate-800 rounded-md items-center">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <Star

                                className={`${index + 1 <= ratings ? 'text-yellow-400 ' : 'text-slate-400'} ${index + 1 <= mouseOut ? 'text-yellow-400 ' : 'text-slate-400'}cursor-pointer`} key={index}
                                onMouseOver={() => setMouseOut(index + 1)}
                                onMouseOut={() => setMouseOut(0)}
                                onClick={(e) => addStar(index, e)}
                                weight="fill" size={32} />

                        )
                    })}

                </div>
                <p className="text-white font-semibold text-xl mb-1 text-center">Ratings: {ratings}</p>
            </div>
            <div className='flex justify-center'>
                <button className='text-center py-2 px-3 rounded-lg bg-slate-800 mt-2 text-white font-semibold tracking-wide' onClick={submitRatings}>Submit</button>
            </div>
        </>
    )
}

export default MovieRatings