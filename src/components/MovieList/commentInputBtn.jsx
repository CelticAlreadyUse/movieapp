'use client'
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const commentInputBtn = ({ movie_id, user_email, user_name, user_image }) => {
    const [comment, setComment] = useState('')

    const [isCreated, setIsCreated] = useState(false)
    const [alerMessage, setAlertMessage] = useState('')

    const router = useRouter()
    const tipe = new Date()
    const date = tipe.toLocaleDateString()

    const handleInput = (event) => {
        const value = event.target.value
        setComment(value)
    }
    const postComment = async (event) => {
        event.preventDefault()
        if (!comment == '' && comment.length >= 3) {
            const data = { movie_id, user_email, comment, user_name, date, user_image }
            const response = await fetch("/api/v1/comment", {
                method: "POST",
                body: JSON.stringify(data)
            })
            const postComment = await response.json()
            if (postComment.status == 200) {
                setIsCreated(true)

                setComment('')
                setAlertMessage('')
                router.refresh()
                return
            }
        } else if (comment.length < 3) {
            setAlertMessage('Please input something and have more than 3 character')
        }
    }

    return (

        <>
            <h1 className="text-white text-2xl font-semibold ml-2">Add your comments</h1>


          
            <div className="text-slate-white h-full">
                <p className="text-white font-bold">{alerMessage}</p>
                {isCreated && <p className="tex-white font-semibold ml-4 text-xl">Your comments has been post</p>}
                <div className="flex justify-center w-full items-start">
                    <Image className="rounded-full w-9 hidden md:block h-9 object-cover mr-2" width={700} height={100} src={user_image}></Image>
                    <textarea placeholder="add your comments here" value={comment} onChange={handleInput} className="w-10/12 grid place-items-center h-32 rounded-lg" />
                </div>

                <div className="flex justify-end">
                    <button className={`py-2 px-6 mt-2 mr-6 font-bold rounded-lg bg-slate-800 text-white text-end`} onClick={postComment}>Send</button>
                </div>
            </div>


        </>
    )
}

export default commentInputBtn