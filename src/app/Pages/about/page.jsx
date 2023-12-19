import Foto from '@/app/src/assets/img/a-16-year-old-teenage-boy-with-oval-glasses-who-ha-upscaled.png'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { Browser } from '@phosphor-icons/react/dist/ssr/Browser'
import Image from "next/image"
const AboutPage = () => {
    return (
        <div className="text-center text-4xl text-slate-800 font-semibold mt-2">
            <h1>What is We Movie?</h1>
            <div className='flex mt-3 ml-4 mr-10 w-full justify-between'>
                <p className="text-xl mt-4 h-48 mr-4">We Movie is a website that shares information about movies created by a 16-year-old student who attends SMA PANGUDI LUHUR YOGYAKARTA. Who mastered <span className="text-cyan-500"> HTML, CSS, JS, C++, PHP, TAILWIND, BOOTSTRAP and frameworks such as Vue js, React js, Next Js, Nuxt Js and Codeigniter </span>
                    This web is created using Next Js as a learning API fetching, Style, Props, components, useState, auth, login, processing the data obtained.
                </p>
                <Image className='border rounded-r-3xl mr-24 object-cover w-72 h-80' width={500} height={800} src={Foto} />
            </div>
            <div>
                <div className='text-start w-screen text-slate-200 bg-slate-500'>
                    <div className='w-screen h-1 mt-10 bg-gray-800'></div>
                   <div className='flex justify-around '>
                    <div className='ml-10 h-full items-center'>
                        <h1 className='mt-4 '   >Contac Me!</h1>
                        <h3 className='text-xl'>Email:</h3>
                        <h4 className='text-lg'>wahyusantosokanisius@gmail.com</h4>
                        <h3 className='text-xl'>Phone:</h3>
                        <h4 className='text-lg'>+62852-5437-5150</h4>

                    </div>
                    <div className='mt-10'>
                    <h3 className='text-xl'>Github:</h3>
                    <div className='flex items-center'>
                    <GithubLogo size={32} />
                    <h3 className='text-sm'>https://github.com/CelticAlreadyUse</h3>
                    </div>
                    <h3 className='text-xl'>Official Website:</h3>
                    <div className='flex items-center'>
                    <Browser size={32} />
                    <h3 className='text-sm'>https://github.com/CelticAlreadyUse</h3>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage