'use client'
import { List } from "@phosphor-icons/react/dist/ssr"
import Style from '../style.module.css'
import Image from "next/image"
import Link from "next/link"
import { ChalkboardTeacher } from "@phosphor-icons/react/dist/ssr/ChalkboardTeacher"
import { SignOut } from "@phosphor-icons/react/dist/ssr/SignOut"
import styled from 'styled-components';
import { useState } from "react"

const MyStyledComponent = styled.div`
 display: ${props => props.active ? 'block' : 'none'};
`;
const Comps = ({user}) =>{
    const [active,setActive] = useState(false)
    return(
        <>
         <div className="flex justify-between md:hidden text-slate-200 items-center">
                            <div className="flex items-center" >
                            <div className={`ml-2 mr-2 font-semibold ${Style.hoverBtn}`}><span className="font-bold">Hello!</span> {user.user?.name}</div>
                            <div className={`p-3 bg-slate-800 rounded-2xl ${Style.hoverBtn}`}>
                                <Image className={`w-9 h-9 rounded ${Style.hoverBtn}`} src={user.user?.image} width={32} height={32} alt="...." />
                               

                            </div>
                            </div>
                            <div>
                                <List onClick={()=>setActive(!active)} className={`${Style.hoverBtn}`} size={32} />

                            </div>
                        </div>
                        <MyStyledComponent active={active} className={`md:hidden ${Style.hoverData}`}>
                                    <Link href={'/users/dashboard'} className={`${Style.child} flex items-center mt-2`} >
                                        <span className="text-slate-900"><ChalkboardTeacher size={32} /></span> 
                                        <h3 className="text-xl text-slate-900">Dashboard</h3></Link>
                                    <Link href={"/api/auth/signout"} className={`${Style.child} flex items-center mt-2`}>
                                        <span className="text-slate-900"><SignOut size={32} /></span>
                                        <h3 className="text-xl text-slate-900">Logout</h3></Link>

                                </MyStyledComponent>

        </>
    )
}
export default Comps