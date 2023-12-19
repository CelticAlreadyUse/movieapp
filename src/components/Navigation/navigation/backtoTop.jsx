'use client'
import { ArrowCircleUp } from '@phosphor-icons/react/dist/icons/ArrowCircleUp'
import { useEffect, useState } from 'react'
const button = () =>{
    const [backButton , setBackbutton] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 800){
                setBackbutton(true)
            }else{
                setBackbutton(false)
            }
        })
    },[])
    const ScrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <>
        {backButton && (
            <div onClick={ScrollUp} className='fixed text-white rounded-full flex items-center justify-center right-2 mr-2 l bottom-8 w-14 h-14 bg-sky-700'>
            <button  >
  <ArrowCircleUp size={52} />
  </button>
            </div>
        )}
        </>
    )
}
export default button