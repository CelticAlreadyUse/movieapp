import Link from "next/link"
import { authUserSession } from '@/libs/auth-libs'
import Style from './style.module.css'
import Image from "next/image"
import { SignOut, ChalkboardTeacher } from "@phosphor-icons/react/dist/ssr"
import MenuBtn from './components/buttonTiggerOpen'
const Page = async () => {
    const user = await authUserSession();
    const actionLabel = user ? 'Sign Out' : 'Sign in'
    const ActionUrl = user ? "api/auth/signout" : "/Pages/login"
    return (
        <>
            <div>
                {user != null ?
                    <>
                        <div className="hidden text-slate-200 md:flex items-center">
                            <div className={`ml-2 mr-2 font-semibold ${Style.hoverBtn}`}><span className="font-bold">Hello!</span> {user.user.name}</div>
                            <div className={`p-3 bg-slate-800 rounded-2xl ${Style.hoverBtn}`}>
                                <Image className={`w-9 h-9 rounded ${Style.hoverBtn}`} src={user.user.image} width={32} height={32} alt="...." />
                                <div className={`hidden md:block ${Style.hoverData}`}>
                                    <Link href={'/users/dashboard'} className="flex items-center mt-2" >
                                        <span className="text-slate-900"><ChalkboardTeacher size={32} /></span>
                                        <h3 className="text-xl text-slate-900">Dashboard</h3></Link>
                                    <Link href={"/api/auth/signout"} className="flex items-center">
                                        <span className="text-slate-900"><SignOut size={32} /></span>
                                        <h3 className="text-xl text-slate-900">Logout</h3></Link>

                                </div>
                            </div>
                        </div>
                    <MenuBtn user={user}/>

                    </>
                    : null

                }
                {user != null ? null :
                    <div className="flex items-center">
                        <Link href={ActionUrl} className="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {actionLabel}
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}
export default Page