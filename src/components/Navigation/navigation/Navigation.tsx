import Search from './search'
import Link from 'next/link'
import BacktoTop from './backtoTop'
import Login from './Login'
const Navigation = () =>{
    return(
<>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet"/>
       
        

<nav className="hidden  md:block bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href={'./.'}className="flex items-center space-x-3 rtl:space-x-reverse">
      <Link href={'/'} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">We Movie!</Link>
  </Link>
  <div className="flex justify-center items-center md:order-2">
    <div className="relative hidden md:block">
        <Search/>
 
    </div>
    <Login/>
      </div>
    <div className="hidden w-full  md:flex md:w-auto md:order-1" id="navbar-default">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href={'/Pages/about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
        </li>
        <li>
          <Link href={'/Pages/random'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Random</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav>
<div className="xl:hidden md:hidden w-full  order-1" id="navbar-default">
  
      <ul className="flex flex-col p-4 md:p-0  font-medium border border-gray-100 md:rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<Link href={'/'} className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">We Movie!</Link>
<Search/>
        <li>
          <Link href={'/Pages/about'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
        </li>
        <li>
          <Link href={'/Pages/random'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Random</Link>
        </li>

      <li>
        <Login/>
      </li>
      </ul>
     
  </div>
      <BacktoTop/>
  </nav>
</>

    )
}
export default Navigation