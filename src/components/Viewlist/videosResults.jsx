 'use client'
 import Youtube from 'react-youtube'
  const Video = ({Videos}) =>{
    const spliceVideos = Videos.results?.splice(0,6)
    const Option ={
        width:'320',
        height:'200'
    }
    return(
        <>
        {Videos.video === false  ?  null

        :           <h1 className='font-bold text-xl'>Videos</h1> }
       <div className='flex items-center gap-7  overflow-x-auto overflow-y-hidden'>
            
        {spliceVideos?.map(video=>{
            return(

                <Youtube videoId={video.key}
                 onReady={(event)=>event.target.pauseVideo()}
                 opts={Option}
                 />

            )
        })}
        </div>
   
    </>
    )
}
export default Video