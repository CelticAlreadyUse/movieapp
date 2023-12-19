'use client'
import Image from 'next/image'
import Styled from 'styled-components'
import Information from '@/components/Collection/Information'
const header = ({Movie}) => {
    const Model = Styled.div`
    background-image:url(https://image.tmdb.org/t/p/w500${Movie.backdrop_path}); 
    background-size:cover;
    background-repeat:no-repeat;
    background-position-y:center;
    position:absolute;
    z-index:-1;
    `
  return (
    <>
    <div className='w-full h-full'>
        <div className='h-h6 flex items-center'>
<Model className='w-full h-56 lg:h-80 lg:-order-1'>
</Model>
<div className='lg:flex-1 z-20 drop-shadow-[4px_4px_0.80rem_blue] h-full max-w-fit mt-2 flex items-center'>
    <Image className='z-30 w-36 lg:ml-2 lg:w-56 object-cover h-48 lg:h-72 rounded-xl' width={100} height={400} src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}/>
</div>
    <Information className='flex-1 ml-2' Movies={Movie}/>
    </div>
    </div>
    </>
  )
}

export default header