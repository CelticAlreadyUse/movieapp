'use client'
import { usePathname  } from 'next/navigation'
// import Link from 'next/link'
export default function PathName(){
    const path = usePathname()

    return(
        <>
                    <h1  className='text-gray-500 p-1 text-md tracking-wide ml-2'>
                        {path}
        </h1>
        </>
    )
}