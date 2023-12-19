'use client'
import React, { useState } from 'react'

const Addcolecctionbtn = ({movie_id,user_email}) => {
    const [isCreated,setIsCreated] = useState(false)
    const handleFavorite = async(event) =>{
        event.preventDefault()

        const data={movie_id,user_email}
        const response = await fetch("/api/v1/collection",{
            method:"POST",
            body:JSON.stringify(data)
        })
        const favorite = await response.json()
            if(favorite.status == 200){
                setIsCreated(true)
            }
            return
    }

    return (
        <>
        {isCreated ? <p className='ml-2 font-semibold text-white font-serif mt-2 p-2 bg-slate-600 rounded-lg'>Successfully Added</p> 
        :
    <button onClick={handleFavorite} class="bg-gray-500 ml-2 mt-10 rounded-lg px-2 h-10 flex items-center justify-center">
 <div class="text-white text-xl">Add To Favorite ♥</div>
</button>
    }
        </>
  )
}

export default Addcolecctionbtn