"use client";
import RootLayout from "../layout";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineEye, AiFillExclamationCircle } from "react-icons/ai";
import { useState } from "react";
import { LuEdit2 } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import paciente from "../utils/paciente.json"

interface Style {
    cursor: string
}

export default function page() {
    const [isOpen, setIsOpen] = useState(false)
    const [todo, setTodo] = useState(true)
    const [ocupado, setOcupado] = useState(false)
    const [disponible, setDisponible] = useState(false)
    const [mala, setMala] = useState(false)
    let [filterBy, setFilterBy] = useState([])
    let filtered = paciente.filter(paciente => { return paciente.estado == "ocupado" })

    const toggleTodo = () => {
        setTodo(true);
        setOcupado(false);
        setDisponible(false);
        setMala(false);
    }

    function toggleOcupada() {
        let filter = paciente.filter(paciente => { return paciente.estado == "ocupado" })
        setFilterBy(filter)
    }
    function toggleDisponible() {
        let filter = paciente.filter(paciente => { return paciente.estado == "disponible" })
        setFilterBy(filter)
    }
    const toggleMala = () => {
        let filter = paciente.filter(paciente => { return paciente.estado == "mala" })
        setFilterBy(filter)
    }
    const iconStyle: Style = {
        cursor: "pointer",
    };



    return (
        <RootLayout>
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center items-center flex-col w-[50%] h-[80%] ">
                    <div className="h-10 w-full bg-black flex-row flex">
                        <button onClick={toggleTodo} className="bg-white hover:bg-blue-500 hover:text-white border border-black h-10 w-[15%]">TODO</button>
                        <button onClick={toggleOcupada} className="bg-white hover:bg-blue-500 hover:text-white border border-black h-10 w-[15%]">OCUPADO</button>
                        <button onClick={toggleDisponible} className="bg-white hover:bg-blue-500 hover:text-white border border-black h-10 w-[15%]">DISPONIBLE</button>
                        <button onClick={toggleMala} className="bg-white hover:bg-blue-500 hover:text-white border border-black h-10 w-[15%]">DESHABILITADO</button>
                    </div>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)} />

                    <div className="w-full flex justify-end bg-white h-10 items-center">
                        <IoMdAddCircle style={{ color: "green", cursor: "pointer" }} onClick={() => setIsOpen(true)} />
                    </div>
                    <div className="w-full overflow-y-scroll h-[50%] ">

                        <table className="table-fixed text-center shadow-xl  bg-white">
                            <thead>
                                <tr className="border-2">
                                    <th className="border-2 px-2">N° de cama</th>
                                    <th className="border-2 px-2">Pabellón</th>
                                    <th className="border-2 px-2">Nombre del paciente</th>
                                    <th className="border-2 px-2">RUT paciente</th>
                                    <th className="border-2 px-2">Sexo</th>
                                    <th className="border-2 px-2">Dia entrada</th>
                                    <th className="border-2 px-2">Hora entrada</th>
                                    <th className="border-2 px-2">Estado</th>
                                    <th className="border-2 px-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterBy.map((paciente: any) => (
                                    <tr className="border-2" key={paciente.id}>
                                        <td className="border-2 px-2">{paciente.id}</td>
                                        <td className="border-2 px-2">{paciente.pabellon}</td>
                                        <td className="border-2 px-2">{paciente.name}</td>
                                        <td className="border-2 px-2">{paciente.rut}</td>
                                        <td className="border-2 px-2">{paciente.sexo}</td>
                                        <td className="border-2 px-2">{paciente.entrada}</td>
                                        <td className="border-2 px-2">{paciente.hora}</td>
                                        <td className="border-2  px-2">
                                            <div className="flex justify-center">
                                                {paciente.estado == "disponible" && <BsFillExclamationCircleFill style={{ color: "green" }} />}
                                                {paciente.estado == "ocupado" && <BsFillExclamationCircleFill style={{ color: "red" }} />}
                                                {paciente.estado == "mala" && <BsFillExclamationCircleFill style={{ color: "yellow" }} />}
                                            </div>
                                        </td>
                                        <td className="py-1 px-2">
                                            <div className="flex flex-row justify-center gap-2">
                                                <AiOutlineEye style={iconStyle} />
                                                <MdDeleteOutline style={iconStyle} />{" "}
                                                <LuEdit2 style={iconStyle} />
                                            </div>
                                        </td>
                                    </tr>)
                                )
                                }


                            </tbody>
                        </table>

                        {/* {
                            ocupado === true &&
                            <table className="table-fixed text-center shadow-xl  bg-white">
                                <thead>
                                    <tr className="border-2">
                                        <th className="border-2 px-2">N° de cama</th>
                                        <th className="border-2 px-2">Pabellón</th>
                                        <th className="border-2 px-2">Nombre del paciente</th>
                                        <th className="border-2 px-2">RUT paciente</th>
                                        <th className="border-2 px-2">Sexo</th>
                                        <th className="border-2 px-2">Dia entrada</th>
                                        <th className="border-2 px-2">Hora entrada</th>
                                        <th className="border-2 px-2">Estado</th>
                                        <th className="border-2 px-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paciente.map((paciente) => ( //mostrar solo ocupado
                                        <tr className="border-2" key={paciente.id}>
                                            <td className="border-2 px-2">{paciente.id}</td>
                                            <td className="border-2 px-2">{paciente.pabellon}</td>
                                            <td className="border-2 px-2">{paciente.name}</td>
                                            <td className="border-2 px-2">{paciente.rut}</td>
                                            <td className="border-2 px-2">{paciente.sexo}</td>
                                            <td className="border-2 px-2">{paciente.entrada}</td>
                                            <td className="border-2 px-2">{paciente.hora}</td>

                                            <td className="border-2  px-2">
                                                <div className="flex justify-center">
                                                    {paciente.estado == "disponible" && <BsFillExclamationCircleFill style={{ color: "green" }} />}
                                                    {paciente.estado == "ocupada" && <BsFillExclamationCircleFill style={{ color: "red" }} />}
                                                    {paciente.estado == "mala" && <BsFillExclamationCircleFill style={{ color: "yellow" }} />}
                                                </div>
                                            </td>
                                            <td className="py-1 px-2">
                                                <div className="flex flex-row justify-center gap-2">
                                                    <AiOutlineEye style={iconStyle} />
                                                    <MdDeleteOutline style={iconStyle} />{" "}
                                                    <LuEdit2 style={iconStyle} />
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    )
                                    }


                                </tbody>
                            </table>

                        }
                        {
                            disponible === true &&
                            <table className="table-fixed text-center shadow-xl  bg-white">
                                <thead>
                                    <tr className="border-2">
                                        <th className="border-2 px-2">N° de cama</th>
                                        <th className="border-2 px-2">Pabellón</th>
                                        <th className="border-2 px-2">Nombre del paciente</th>
                                        <th className="border-2 px-2">RUT paciente</th>
                                        <th className="border-2 px-2">Sexo</th>
                                        <th className="border-2 px-2">Dia entrada</th>
                                        <th className="border-2 px-2">Hora entrada</th>
                                        <th className="border-2 px-2">Estado</th>
                                        <th className="border-2 px-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paciente.map((paciente) => (
                                        <tr className="border-2" key={paciente.id}>
                                            <td className="border-2 px-2">{paciente.id}</td>
                                            <td className="border-2 px-2">{paciente.pabellon}</td>
                                            <td className="border-2 px-2">{paciente.name}</td>
                                            <td className="border-2 px-2">{paciente.rut}</td>
                                            <td className="border-2 px-2">{paciente.sexo}</td>
                                            <td className="border-2 px-2">{paciente.entrada}</td>
                                            <td className="border-2 px-2">{paciente.hora}</td>

                                            <td className="border-2  px-2">
                                                <div className="flex justify-center">
                                                    {paciente.estado == "disponible" && <BsFillExclamationCircleFill style={{ color: "green" }} />}
                                                    {paciente.estado == "ocupada" && <BsFillExclamationCircleFill style={{ color: "red" }} />}
                                                    {paciente.estado == "mala" && <BsFillExclamationCircleFill style={{ color: "yellow" }} />}
                                                </div>
                                            </td>
                                            <td className="py-1 px-2">
                                                <div className="flex flex-row justify-center gap-2">
                                                    <AiOutlineEye style={iconStyle} />
                                                    <MdDeleteOutline style={iconStyle} />{" "}
                                                    <LuEdit2 style={iconStyle} />
                                                </div>
                                            </td>
                                        </tr>)
                                    )
                                    }


                                </tbody>
                            </table>

                        }
                        {
                            mala === true &&
                            <table className="table-fixed text-center shadow-xl  bg-white">
                                <thead>
                                    <tr className="border-2">
                                        <th className="border-2 px-2">N° de cama</th>
                                        <th className="border-2 px-2">Pabellón</th>
                                        <th className="border-2 px-2">Nombre del paciente</th>
                                        <th className="border-2 px-2">RUT paciente</th>
                                        <th className="border-2 px-2">Sexo</th>
                                        <th className="border-2 px-2">Dia entrada</th>
                                        <th className="border-2 px-2">Hora entrada</th>
                                        <th className="border-2 px-2">Estado</th>
                                        <th className="border-2 px-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paciente.map((paciente) => (
                                        <tr className="border-2" key={paciente.id}>
                                            <td className="border-2 px-2">{paciente.id}</td>
                                            <td className="border-2 px-2">{paciente.pabellon}</td>
                                            <td className="border-2 px-2">{paciente.name}</td>
                                            <td className="border-2 px-2">{paciente.rut}</td>
                                            <td className="border-2 px-2">{paciente.sexo}</td>
                                            <td className="border-2 px-2">{paciente.entrada}</td>
                                            <td className="border-2 px-2">{paciente.hora}</td>

                                            <td className="border-2  px-2">
                                                <div className="flex justify-center">
                                                    {paciente.estado == "disponible" && <BsFillExclamationCircleFill style={{ color: "green" }} />}
                                                    {paciente.estado == "ocupada" && <BsFillExclamationCircleFill style={{ color: "red" }} />}
                                                    {paciente.estado == "mala" && <BsFillExclamationCircleFill style={{ color: "yellow" }} />}
                                                </div>
                                            </td>
                                            <td className="py-1 px-2">
                                                <div className="flex flex-row justify-center gap-2">
                                                    <AiOutlineEye style={iconStyle} />
                                                    <MdDeleteOutline style={iconStyle} />{" "}
                                                    <LuEdit2 style={iconStyle} />
                                                </div>
                                            </td>
                                        </tr>)
                                    )
                                    }


                                </tbody>
                            </table>

                        } */}

                    </div>
                </div>
            </div>
        </RootLayout>
    );
}
