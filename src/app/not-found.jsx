'use client'
import Oops from '../app/src/assets/img/a-16-year-old-teenage-boy-with-oval-glasses-who-ha-upscaled (1).png'
import Image from 'next/image'
import { HouseLine } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
const NotFound = () =>{
    const router = useRouter()
  
    return(
        <>
        <div className="flex items-center justify-center translate-y-2/4">
            
        <Image src={Oops} width={700} height={500} className='rounded-3xl w-96 h-72 object-cover' />
            <div className="text-center text-3xl text-slate-800 font-semibold ml-2">OOps, looks like the page you are looking for is not found.<br/> 
            <div className='flex mt-2 w-full justify-center'>
            <button className="underline text-indigo-600 font-normal flex items-center justify-center" onClick={()=>router.back()}><HouseLine size={32} className='' /> <span>Back to previous Page</span></button>
            </div>
            
            </div>
            
        </div>
        </>
    )
}
export default NotFound