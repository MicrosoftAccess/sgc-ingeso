import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '50px',
    zIndex: 1000
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zindex: 1000
}
export default function Modal({ open, children, onClose }: any) {
    const [dropdown, setDropdown] = useState("Seleccione una cama disponible")
    const [visible, setVisible] = useState(false)
    if (!open) return null

    return (
        <>
            <div style={OVERLAY_STYLE}></div>
            <div style={MODAL_STYLE} className="bg-slate-100 w-[50%] h-[50%] flex-col flex rounded-md shadow-xl">
                <div className="flex w-full">
                    <div className="flex w-[60%] justify-end">
                        <p className="text-xl">Añadir paciente a cama</p>

                    </div>
                    <div className="flex w-[40%] justify-end">
                        <button onClick={onClose}><AiOutlineClose style={{ width: "20px", height: '20px' }} /></button>

                    </div>

                </div>
                <div className="w-full mt-2 h-[1px] bg-black"></div>

                <div className="flex flex-row gap-3 justify-center pt-5">
                    <button onClick={() => setVisible(!visible)} className="w-[40%] px-3 bg-white border-2 h-10">{dropdown}</button>
                    {visible ? <></> : <div className="fixed bottom-[43%] w-full left-[13.5%]">
                        <ol className="w-full">
                            <li><button className="w-[36%] px-3 hover:bg-blue-500 bg-white border-2 h-10">opcion 1</button></li>
                            <li><button className="w-[36%] px-3 hover:bg-blue-500 bg-white  border-2 h-10">opcion 2</button></li>
                            <li><button className="w-[36%] px-3  bg-white border-2 h-10">opcion 3</button></li>
                        </ol>
                    </div>}
                    <input placeholder="rut paciente" className="w-[40%] px-3 border-gray-100 border-2 h-10" type="text" />

                </div>
                <div className="w-100 flex h-full justify-center items-end">
                    <button className="bg-green-500 w-[40%] shadow-xl fixed bottom-100 rounded-md text-white h-10">Aceptar</button>
                </div>
                {children}</div>
        </>
    )
}
