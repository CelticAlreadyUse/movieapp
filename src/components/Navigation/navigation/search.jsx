'use client'
import { MagnifyingGlass } from "@phosphor-icons/react/dist/icons/MagnifyingGlass"
import { use, useRef } from "react"
import { useRouter } from "next/navigation"
const search = () =>{
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) =>{
        event.preventDefault()
        const keyword = searchRef.current.value
        const newUri = decodeURI(keyword)
        if(searchRef.current.value !== ''){   
            router.push(`/Pages/search/${newUri}`)
            searchRef.current.value = ''
        }else{
            alert('please input something')
        }
    }
    const handlePressKey = (event) =>{
        if(event.key == "Enter"){
            handleSearch(event)
        }
    }
    return(
        <>
             <div className="flex items-center ps-3">
        <input onKeyDown={handlePressKey} ref={searchRef} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      <button className='absolute text-slate-500  right-6 md:top-1 md:right-2.5 end-0'  onClick={handleSearch} >
          <MagnifyingGlass  size={32} />
      </button>
        </div>
        </> 
    )

}
export default search