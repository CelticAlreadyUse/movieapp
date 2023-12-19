import Styles from './compo.module.css'
const HeroPage = () =>{

    return(
    <div >
        <div className='text-center mt-8'>  
         <div className='xl:flex md:flex items-center justify-center  mb-4'>
<h1 className="hover:text-violet-600 ease-in-out duration-200 text-3xl xl:text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-dark">Discover all about film</h1>
<div className={Styles.wrapper}>
    <ul className={Styles.dynamicTxts}>
      <li><span>Riview</span></li>
      <li><span>Ratings</span></li>
      <li><span>Market</span></li>
    </ul>
    </div>
        </div>
<div class="mb-6 text-xl xl:text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">This is a flim website with tons of interesting features and complete flim reviews.</div>
            </div> 

    </div>
    )
}

export default HeroPage
