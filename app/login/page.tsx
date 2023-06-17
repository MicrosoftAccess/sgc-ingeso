"use client";
import Link from "next/link"
import RootLayout from "../layout"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { useState } from "react";
export default function page() {

    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!isVisible);
    };
    return (
        <RootLayout>
            <div className="w-full h-full flex items-center justify-center">

                <div className="flex shadow-xl flex-col w-[20%] h-[40%] bg-white rounded-md gap-5 items-center justify-evely">
                    <div className="w-full h-[20%] flex justify-center items-center">

                        <div className="text-3xl">
                            Inicio de sesión
                        </div>
                    </div>

                    <div className="w-[90%] h-[1px] bg-black"></div>
                    <div className='w-full flex flex-col items-center justify-center gap-3'>
                        <div className="w-full flex h-10 items-center justify-center">

                            <input className="w-[70%] h-10 border-black border rounded-l-md text-center" placeholder="Nombre de usuario" type="text" />
                            <div className="rounded-r-md border-r border-t border-b border-black bg-white  h-10 flex items-center justify-center">
                                <BiUser />
                            </div>
                        </div>
                        <div className="w-full flex h-10 items-center justify-center">
                            <input type={isVisible ? "text" : "password"} className="w-[70%] h-full border-black border rounded-l-md text-center" placeholder="Contraseña" />
                            <button onClick={() => setVisible(!isVisible)} className="rounded-r-md border-t border-r border-b border-black bg-white  h-10">

                                {
                                    isVisible ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible />

                                }

                            </button>
                        </div>
                        <Link className='w-full flex justify-center items-center' href="/camas">
                            <button className="w-[75%] text-white h-10 bg-green-500 rounded-md" > Iniciar sesión</button>
                        </Link>

                    </div>
                    {/* <Link href={`/region/${encodeURIComponent(region.name)}`}> */}
                </div>
            </div>

        </RootLayout >
    )
}
