"use client"
import { useContext, useEffect } from "react"
import UniversidadContext from "../context/universidad/UniversidadContext"
import Link from "next/link"

export default function UniversidadPage() {
    const { examenes, obtenerExamenes } = useContext(UniversidadContext)

    useEffect(() => {
        obtenerExamenes()
    }, [])

    if (!examenes) return null
    return (
        <div>
            <h1 className="titulo">MIKA</h1>
            <ul>
                {
                    examenes.map(examen => {
                        return (
                            <li key={examen.ID}>
                                <Link href={`/${examen.examen_id}`}><button className="boton">{examen.nombre}</button></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}